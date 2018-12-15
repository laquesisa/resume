import { Component, HostListener, AfterViewChecked } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
active(newRoute) {
  this.activeRoute = newRoute;
}
activeRoute = 'top-menu'
topMenu;
topMenuHeight;
scrollElements;
surname = 'Dana';
lastname = 'Shmaria';
ngAfterViewChecked() {
  this.topMenu = $('#top-menu');
  this.topMenuHeight = this.topMenu.outerHeight()+15;
  this.scrollElements = $('#navigation').find('a');
}
@HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    let scrollE = this.scrollElements.toArray();
    for(let element of scrollE){
      if(pageYOffset <= $($(element).attr('href'))[0].offsetTop) {
        console.log(pageYOffset + '-' + $($(element).attr('href'))[0].offsetTop);
        this.active($(element).attr('href').slice(1,$(element).attr('href').length));
        break;
      }
    }
  }
}
