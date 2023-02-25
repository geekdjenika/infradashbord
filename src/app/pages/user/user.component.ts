import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [1,2,3,4,5,6,7,8,9,0];
  longueur: any;
  page:number=1;
  responsive = true
  listutilisateur : any

  constructor(private utilisateurservice : UtilisateurService) { }

  ngOnInit(): void {
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
  }

}
