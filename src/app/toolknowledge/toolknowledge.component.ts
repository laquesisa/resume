import { Component, OnInit } from '@angular/core';
import { KnowHow } from '../programmingskills/knowhow';


@Component({
  selector: 'app-toolknowledge',
  templateUrl: './toolknowledge.component.html',
  styleUrls: ['./toolknowledge.component.scss']
})
export class ToolknowledgeComponent implements OnInit {

  tools = [
    new KnowHow('Windows', 100), 
    new KnowHow('Linux', 70), 
    new KnowHow('Git', 80), 
    new KnowHow('Jira', 80), 
    new KnowHow('Docker', 50)
  ];
  constructor() { }

  ngOnInit() {
  }

}
