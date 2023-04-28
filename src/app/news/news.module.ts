import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './pages/news-listing/news-listing.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleDisplayComponent } from './pages/article-display/article-display.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  exports: [
    NewsListingComponent
  ],
  declarations: [
    LayoutComponent,
    NewsListingComponent,
    ArticleDisplayComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule
  ]
})
export class NewsModule { }
