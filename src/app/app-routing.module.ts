import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListingComponent } from './news/pages/news-listing/news-listing.component';
import { ArticleDisplayComponent } from './news/pages/article-display/article-display.component';
import { ArticleResolver } from './core/resolvers/article-resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    component: NewsListingComponent,
    path: 'news',
    children: [
      {
        component: ArticleDisplayComponent,
        path: ':id',
        resolve: { article: ArticleResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
