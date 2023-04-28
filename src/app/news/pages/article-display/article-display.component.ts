import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { News } from '../../../types';
import { API_URL } from '../../../constants';

@Component({
  selector: 'nr-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit {

  public article$: Observable<News>;
  public apiUrl = API_URL;

  constructor(private activatedRoute: ActivatedRoute) {
    this.article$ = activatedRoute.data.pipe(
      map(data => data['article'])
    );
  }

  ngOnInit() {
  }
}
