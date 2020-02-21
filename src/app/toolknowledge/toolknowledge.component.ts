import { Component, OnInit } from '@angular/core';
import { KnowHow } from '../programmingskills/knowhow';


@Component({
  selector: 'app-toolknowledge',
  templateUrl: './toolknowledge.component.html',
  styleUrls: ['./toolknowledge.component.scss']
})
export class ToolknowledgeComponent implements OnInit {

  tools = [
    new KnowHow('Git', 90),
    new KnowHow('Docker, Cloudfoundry, Artifactory', 70),
    new KnowHow('Jenkins', 80),
    new KnowHow('Figma', 70),
    new KnowHow('Windows', 100),
    new KnowHow('Linux, macOS', 70)
  ];
  constructor() { }

  ngOnInit() {
  }

}
