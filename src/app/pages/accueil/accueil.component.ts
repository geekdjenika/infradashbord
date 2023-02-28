import { ConseilService } from './../../services/conseil/conseil.service';
import { InfractionService } from './../../services/infraction/infraction.service';
import { StorageService } from './../../services/auth/storage.service';
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listinfraction : any
  listconseil : any
  listutilisateur : any
  listquiz : any

  admin!: boolean

  constructor(
    private storageservice: StorageService,
    private infractionservice : InfractionService,
    private conseilservice : ConseilService,
    private quizservice : QuizService,
    private utilisateurservice : UtilisateurService,
    private router: Router) { }

  ngOnInit(): void {

    //Infractions
    this.infractionservice.getAllInfraction().subscribe({
      next: data => {
        this.listinfraction = data;
        console.log(this.listinfraction)
      },
      error: e => {
        console.log(e)
      }
    })

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

    //Conseil
    this.conseilservice.getAllConseil().subscribe({
      next: data => {
        this.listconseil = data;
        console.log(this.listconseil)
      },
      error: e => {
        console.log(e)
      }
    })

    //Utilisateur
    this.utilisateurservice.getAllUsers().subscribe({
      next: data => {
        this.listutilisateur = data;
        console.log(this.listutilisateur)
      },
      error: e => {
        console.log(e)
      }
    })

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  infraction() {
    this.router.navigate(['/dashboard/infractions'])
  }

  conseil() {
    this.router.navigate(['/dashboard/conseils'])
  }

  utilisateur() {
    this.router.navigate(['/dashboard/user'])
  }

  quiz() {
    this.router.navigate(['/dashboard/quiz'])
  }

}
