import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationsNotebookComponent } from './communications-notebook.component';

describe('CommunicationsNotebookComponent', () => {
  let component: CommunicationsNotebookComponent;
  let fixture: ComponentFixture<CommunicationsNotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationsNotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationsNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
