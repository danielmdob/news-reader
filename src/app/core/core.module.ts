import { NgModule } from '@angular/core';
import { NewsService } from './services/news.service';

@NgModule({
  providers: [NewsService],
})
export class CoreModule {}
