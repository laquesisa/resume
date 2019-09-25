import { Component, OnInit } from '@angular/core';
import { KnowHow } from './knowhow';

@Component({
  selector: 'app-programmingskills',
  templateUrl: './programmingskills.component.html',
  styleUrls: ['./programmingskills.component.scss']
})
export class ProgrammingskillsComponent implements OnInit {

  skills = [
    new KnowHow('Java, Python, Kotlin', 80),
    new KnowHow('MySQL, MongoDB', 80),
    new KnowHow('Node-red, ReactJS, React Native, Angular', 70), 
    new KnowHow('Ruby, Ruby On Rails', 60), 
    new KnowHow('Haskell', 50)
  ];
  constructor() { }

  ngOnInit() {
  }

}
