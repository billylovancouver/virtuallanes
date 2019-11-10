import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopOverComponent } from './home-pop-over.component';

describe('HomePopOverComponent', () => {
  let component: HomePopOverComponent;
  let fixture: ComponentFixture<HomePopOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopOverComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
