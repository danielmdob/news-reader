import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { News } from '../../types';
import { NewsService } from '../services/news.service';

export const ArticleResolver: ResolveFn<News | undefined> = (route: ActivatedRouteSnapshot, ) => {
  const newsService: NewsService = inject(NewsService);

  // maybe I can inject the router and redirect to a 404 if there is no article with that id

  return newsService.getArticle(route.paramMap.get('id') as string);
}
