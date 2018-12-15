import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingskillsComponent } from './programmingskills.component';

describe('ProgrammingskillsComponent', () => {
  let component: ProgrammingskillsComponent;
  let fixture: ComponentFixture<ProgrammingskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
