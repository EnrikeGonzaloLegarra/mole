import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  defaultLanguageValue: any = this.translate.getDefaultLang();

  constructor(private translate: TranslateService,
              private router: Router) {
    this.defaultLanguageValue = this.translate.getDefaultLang();
  }

  changeLanguage(event: any) {
    this.translate.use(event.detail.value);
  }

  login() {
    localStorage.setItem('sharedData', this.user);
    this.router.navigate(['/game']);
  }
}
