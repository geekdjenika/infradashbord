import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  page:number=1;
  listquiz : any

  constructor(
    private quizservice : QuizService,
    private router: Router) { }

  ngOnInit(): void {
    //Quiz
    this.quizservice.getAllQuiz().subscribe({
      next: data => {
        this.listquiz = data;
        console.log(this.listquiz)
      },
      error: e => {
        console.log(e)
      }
    })
  }

  ajouterInfraction() {
    this.router.navigate(['/dashboard/ajouterquiz']);
  }

  ajouterQuestion() {
    this.router.navigate(['/dashboard/questiontoquiz']);
  }

  onSubmit() {

  }

}
