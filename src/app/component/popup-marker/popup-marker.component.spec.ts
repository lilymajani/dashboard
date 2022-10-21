import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarkerComponent } from './popup-marker.component';

describe('PopupMarkerComponent', () => {
  let component: PopupMarkerComponent;
  let fixture: ComponentFixture<PopupMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
