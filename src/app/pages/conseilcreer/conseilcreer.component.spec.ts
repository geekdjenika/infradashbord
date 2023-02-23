import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilcreerComponent } from './conseilcreer.component';

describe('ConseilcreerComponent', () => {
  let component: ConseilcreerComponent;
  let fixture: ComponentFixture<ConseilcreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilcreerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilcreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
