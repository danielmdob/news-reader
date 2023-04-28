import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { News } from '../../types';
import { API_URL } from '../../constants';

@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  public getNews(publishYear?: number): Observable<News[]> {
    const baseQuery = '+contentType:Blog '
    const finalQuery = publishYear ? baseQuery + `+Blog.postingDate:[${publishYear}-01-01 TO ${publishYear}-12-31]` : baseQuery;
    return this.httpClient.post< {
    entity: {
      jsonObjectView: {
        contentlets: News[]
      }
    }
  }>(`${API_URL}api/content/_search`, {
      query: finalQuery
    })
      .pipe(
        map(response => response.entity.jsonObjectView.contentlets)
      );
  }

  public getArticle(identifier: string): Observable<News | undefined> {
    return this.getNews()
      .pipe(
        map(news => news.find(article => article.identifier === identifier)) // it would have been better to hit an endpoint that returns an article by id
      );
  }
}
