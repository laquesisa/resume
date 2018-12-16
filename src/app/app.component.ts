import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  surname = 'Dana';
  lastname = 'Shmaria';
  curLang;

  constructor(private translate: TranslateService) {
    this.curLang = 'en';
    translate.use(this.curLang);
  }

  changeLang() {
    this.curLang = this.curLang === 'de' ? 'en' : 'de';
    this.translate.use(this.curLang);
  }
}
