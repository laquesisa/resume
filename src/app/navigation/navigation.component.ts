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

  scroll(section: string) {
    $(`#${section}`).get(0).scrollIntoView({ block: 'start', behavior: 'smooth' });
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
      if (pageYOffset <= $($(element).attr('link'))[0].offsetTop + 200) {
        const section = $(element).attr('link').slice(1, $(element).attr('link').length);
        if(section === 'toolknowledge'){
          //to show conact as active at the bottom
          if(pageYOffset > $($(element).attr('link'))[0].offsetTop - 180){
            continue;
          }
        }
        this.active(section);
        // show animation of the skillbars
        if (['programmingskills', 'toolknowledge', 'contact'].includes(section)) {
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
