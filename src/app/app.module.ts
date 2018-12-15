import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { ProgrammingskillsComponent } from './programmingskills/programmingskills.component';
import { ToolknowledgeComponent } from './toolknowledge/toolknowledge.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutmeComponent,
    MytimelineComponent,
    ProgrammingskillsComponent,
    ToolknowledgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
