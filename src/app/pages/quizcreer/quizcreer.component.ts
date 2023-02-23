import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizcreer',
  templateUrl: './quizcreer.component.html',
  styleUrls: ['./quizcreer.component.css']
})
export class QuizcreerComponent implements OnInit {

  label:any;
  question:any;
  reponse:any;
  reponse1:any;
  reponse2:any;
  reponse3:any;
  // label:any;
  // label:any;

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addQuiz() {
    this.router.navigate(['/dashboard/infractions']);
  }

  addQuestion() {
    this.router.navigate(['/dashboard/infractions']);
  }

  addResponse() {
    this.router.navigate(['/dashboard/infractions']);
  }

  addQuestionToQuiz() {
    this.router.navigate(['/dashboard/infractions']);
  }

}
