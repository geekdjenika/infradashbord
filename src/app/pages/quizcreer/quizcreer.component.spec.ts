import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcreerComponent } from './quizcreer.component';

describe('QuizcreerComponent', () => {
  let component: QuizcreerComponent;
  let fixture: ComponentFixture<QuizcreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcreerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizcreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
