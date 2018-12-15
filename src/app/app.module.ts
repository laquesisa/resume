import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';

import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { ProgrammingskillsComponent } from './programmingskills/programmingskills.component';
import { ToolknowledgeComponent } from './toolknowledge/toolknowledge.component';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutmeComponent,
    MytimelineComponent,
    ProgrammingskillsComponent,
    ToolknowledgeComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    ParallaxModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
