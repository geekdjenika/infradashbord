import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfractioncreerComponent } from './infractioncreer.component';

describe('InfractioncreerComponent', () => {
  let component: InfractioncreerComponent;
  let fixture: ComponentFixture<InfractioncreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfractioncreerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfractioncreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
