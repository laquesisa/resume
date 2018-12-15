import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolknowledgeComponent } from './toolknowledge.component';

describe('ToolknowledgeComponent', () => {
  let component: ToolknowledgeComponent;
  let fixture: ComponentFixture<ToolknowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolknowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
