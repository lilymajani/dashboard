import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerManagementComponent } from './marker-management.component';

describe('MarkerManagementComponent', () => {
  let component: MarkerManagementComponent;
  let fixture: ComponentFixture<MarkerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
