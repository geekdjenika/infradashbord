import { QuizService } from 'src/app/services/quiz/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizcreer',
  templateUrl: './quizcreer.component.html',
  styleUrls: ['./quizcreer.component.css']
})
export class QuizcreerComponent implements OnInit {

  label:any;
  question:string = '';
  reponse:string = '';
  reponse1:string = '';
  reponse2:string = '';
  reponse3:string = '';

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any

  constructor(
    private router: Router,
    private quizservice : QuizService) { }

  ngOnInit(): void {
  }

  addQuestion(question : string, reponse : string, mreponse1 : string, mreponse2 : string, mreponse3 : string) {
    if(question === '' || reponse === '' || mreponse1 === '' || mreponse2 === '' || mreponse3 === '') {
      Swal.fire({
        title: 'Erreur',
        text: "Veillez renseigner les champs obligatoires !",
        timer: 2000,
        icon: 'error',
      })
    } else {
      this.quizservice.superAddQuiz(question, reponse, mreponse1, mreponse2, mreponse3).subscribe({
        next: data => {
          var rslt = data
          console.log(rslt)
          Swal.fire({
            title: 'Question ajoutée avec succès !',
            text: "Voulez-vous ajouter une autre question ?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'green',
            confirmButtonText: 'Oui, continuer!',
            cancelButtonText: 'Non, voir les quiz'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            } else {
              this.router.navigate(['/dashboard/quiz']);
            }
          })
        },
        error: e => {
          console.log(e)
          Swal.fire({
            title: 'Erreur',
            text: "Erreur survenue lors de l'ajout de la question !",
            timer: 2000,
            icon: 'error',
          })
        }
      })
    }

  }

  addResponse() {
    this.router.navigate(['/dashboard/infractions']);
  }

  addQuestionToQuiz() {
    this.router.navigate(['/dashboard/infractions']);
  }


}
