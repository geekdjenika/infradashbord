import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiontoquizComponent } from './questiontoquiz.component';

describe('QuestiontoquizComponent', () => {
  let component: QuestiontoquizComponent;
  let fixture: ComponentFixture<QuestiontoquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiontoquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestiontoquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
