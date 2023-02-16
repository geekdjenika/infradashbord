import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilsComponent } from './conseils.component';

describe('ConseilsComponent', () => {
  let component: ConseilsComponent;
  let fixture: ComponentFixture<ConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
