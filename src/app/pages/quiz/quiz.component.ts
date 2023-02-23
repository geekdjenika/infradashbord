import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  page:number=1;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
