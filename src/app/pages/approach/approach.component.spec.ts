import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporachComponent } from './apporach.component';

describe('ApporachComponent', () => {
  let component: ApporachComponent;
  let fixture: ComponentFixture<ApporachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApporachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApporachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
