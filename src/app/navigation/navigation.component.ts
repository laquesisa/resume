import { Component, HostListener, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewChecked {

  activeRoute = 'top-menu'
  topMenu;
  topMenuHeight;
  scrollElements;

  constructor() { }

  active(newRoute: string) {
    this.activeRoute = newRoute;
  }

  ngAfterViewChecked() {
    this.topMenu = $('#top-menu');
    this.topMenuHeight = this.topMenu.outerHeight() + 15;
    this.scrollElements = $('#navigation').find('a');
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    let scrollE = this.scrollElements.toArray();
    for (let element of scrollE) {
      if (pageYOffset <= $($(element).attr('href'))[0].offsetTop) {
        const section = $(element).attr('href').slice(1, $(element).attr('href').length);
        this.active(section);
        // show animation of the skillbars
        if (section === 'programmingskills') {
          let bars = document.getElementsByClassName('skillbar-bar');
          for (let i = 0; i < bars.length; i++) {
            bars[i].classList.add('skillbar-animation');
          }
        }
        break;
      }
    }
  }
}
