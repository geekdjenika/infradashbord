import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendeComponent } from './amende.component';

describe('AmendeComponent', () => {
  let component: AmendeComponent;
  let fixture: ComponentFixture<AmendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
