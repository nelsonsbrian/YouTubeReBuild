import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentVideoComponent } from './main-content-video.component';

describe('MainContentVideoComponent', () => {
  let component: MainContentVideoComponent;
  let fixture: ComponentFixture<MainContentVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
