import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  defaultLanguageValue: any = this.translate.getDefaultLang();

  constructor(private translate: TranslateService,
              private router: Router,
              private userService: UserService) {
    this.defaultLanguageValue = this.translate.getDefaultLang();
  }

  changeLanguage(event: any) {
    this.translate.use(event.detail.value);
  }

  login() {
    this.userService.saveUser(this.user);
    this.router.navigate(['/game']);
  }
}
