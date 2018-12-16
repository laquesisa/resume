import { Component, OnInit } from '@angular/core';
import { KnowHow } from './knowhow';

@Component({
  selector: 'app-programmingskills',
  templateUrl: './programmingskills.component.html',
  styleUrls: ['./programmingskills.component.scss']
})
export class ProgrammingskillsComponent implements OnInit {

  skills = [
    new KnowHow('HTML, CSS, SCSS', 100), 
    new KnowHow('Java', 80),
    new KnowHow('MySQL', 80),
    new KnowHow('Ruby, Ruby On Rails', 60), 
    new KnowHow('ReactJS, ReactNative', 60), 
    new KnowHow('Angular', 50)
  ];
  constructor() { }

  ngOnInit() {
  }

}
