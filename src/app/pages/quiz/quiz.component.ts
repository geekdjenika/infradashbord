import { Question } from './../../models/question';
import { StorageService } from './../../services/auth/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  page:number=1;
  listquiz : any

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any

  label:string = '';

  listquestion: any;

  mid!: number
  mlabel!: string
  questions!: Question[]
  mquiz: any
  question1: string = '';
  question2: string = '';
  question3: string = '';

  admin!: boolean

  searhText: any

  constructor(
    private storageservice: StorageService,
    private quizservice : QuizService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAllQuiz();
    this.getAllQuestion()

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  getQuiz(id: number) {
    this.quizservice.getQuiz(id).subscribe(data => {
      this.mquiz = data;
      this.mid = this.mquiz.id;
      this.mlabel = this.mquiz.label;
      this.questions = this.mquiz.questions
      console.log(this.mquiz)
    })
  }

  addNewQuestion() {
    this.router.navigate(['/dashboard/ajouterquiz']);
  }

  ajouterQuestion() {
    this.router.navigate(['/dashboard/questiontoquiz']);
  }

  getAllQuestion() {
    this.quizservice.getAllQuestion().subscribe(data => {
      this.listquestion = data;
      console.log(this.listquestion)
    })
  }

  addQuestionToQuiz(id: number, question1: string, question2: string, question3: string) {
    console.log(id)
    console.log(question1)
    console.log(question2)
    console.log(question3)
    this.quizservice.addQuestionsToQuiz(id,question1,question2,question3).subscribe({
      next: data => {
        var rst = data
        console.log(rst)
        Swal.fire({
          title: 'Questions ajoutées !',
          text: `Questions ajoutées au quiz avec succès !`,
          timer: 3000,
          icon: 'success'
        })
        window.location.reload()
      },
      error: e => {
        console.log(e.status)
        if(e.status == 200) {
          Swal.fire({
            title: 'Questions ajoutées !',
            text: `Questions ajoutées au quiz avec succès !`,
            timer: 3000,
            icon: 'success'
          })
          window.location.reload()
        } else {
          Swal.fire({
            title: 'Erreur !',
            text: `Questions non ajoutées.`,
            timer: 3000,
            icon: 'error'
          })
        }

      }
    })
  }

  supprimerQuiz(id: number) {
    Swal.fire({
      title: 'Voulez-vous supprimer ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizservice.deleteQuiz(id).subscribe({
          next: data => {
            console.log(data)
            this.getAllQuiz()
            Swal.fire({
              title: 'Supprimé !',
              text: `Quiz supprimé avec succès, ${this.listquiz.length - 1} quiz restants.`,
              timer: 5000,
              icon: 'success'
            })
          },
          error: e => {
            const rslt = e.error.text;
            console.log(e)
            if(rslt === 'Quiz supprimé avec succès !') {
              this.getAllQuiz()
              Swal.fire({
                title: 'Supprimé !',
                text: `Quiz supprimée avec succès, ${this.listquiz.length - 1} quiz restants.`,
                timer: 3000,
                icon: 'success'
              })
            } else {
              Swal.fire({
                title: 'Erreur !',
                text: 'Erreur lors de la suppression.',
                timer: 1000,
                icon: 'error'
              })
            }

          }
        })
      }
    })
    this.getAllQuiz()
  }

  addQuiz(label : string) {
    if(label === '') {
      Swal.fire({
        title: 'Erreur !',
        text: `Le champ label est obligatoire !`,
        timer: 1000,
        icon: 'error'
      })
    } else {
      this.quizservice.addQuiz(label).subscribe({
        next: data => {
          var resultat = data
          console.log(resultat)
          Swal.fire({
            title: 'Ajouté avec succès !',
            text: `Quiz ajouté avec succès !`,
            timer: 1000,
            icon: 'success'
          })
          window.location.reload()
        },
        error: e=> {
          console.log(e)
          Swal.fire({
            title: 'Erreur !',
            text: e.error.text,
            timer: 1000,
            icon: 'error'
          })
        }
      })
    }

  }

  getAllQuiz() {
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

}

