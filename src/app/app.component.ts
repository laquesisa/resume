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
    this.restartAnimation();
    this.curLang = this.curLang === 'de' ? 'en' : 'de';
    this.translate.use(this.curLang);
  }

  restartAnimation() {
    let landing = $('#landing');
    let navigation = $('#navigation');
    landing.removeClass('fadeInUp delay-1s');
    navigation.removeClass('fadeInUp delay-1s');
    void landing.get(0).offsetWidth;
    void navigation.get(0).offsetWidth;
    landing.addClass('fadeInUp');
    navigation.addClass('fadeInUp');
  }
}
