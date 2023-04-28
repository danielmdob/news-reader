import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, Observable, switchMap, tap } from 'rxjs';
import { News } from '../../../types';
import { Router } from '@angular/router';
import { API_URL } from '../../../constants';

@Component({
  selector: 'nr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  public selectOptions = [2019, 2020, 2021, 2022, 2023];
  public formGroup: FormGroup;
  public yearControl: FormControl;
  public news$: Observable<News[]>;
  public showNewsOnMobile = false;
  public readonly apiUrl = API_URL;

  public constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.formBuilder.group({
      year: this.selectOptions[0]
    })
    this.yearControl = this.formGroup.controls['year'] as FormControl;
    this.news$ = this.yearControl.valueChanges.pipe(
      distinctUntilChanged(),
      switchMap(year => {
        return this.newsService.getNews(year).pipe(
          tap((news) => {
              this.router.navigate(['/news', news[0]?.identifier].filter(path => path != null));
          })
        )
      })
    );
  }

  public ngAfterViewInit() {
    this.yearControl.updateValueAndValidity({ emitEvent: true });
  }

  public toggleMobileShow() {
    this.showNewsOnMobile = !this.showNewsOnMobile;
  }
}
