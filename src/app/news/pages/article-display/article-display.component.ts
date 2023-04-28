import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { News } from '../../../types';

@Component({
  selector: 'nr-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit {

  public article$: Observable<News>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.article$ = activatedRoute.data.pipe(
      map(data => data['article'])
    );
  }

  ngOnInit() {
  }
}
