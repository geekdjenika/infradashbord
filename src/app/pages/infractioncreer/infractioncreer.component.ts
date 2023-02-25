import { CategorieService } from './../../services/categorie/categorie.service';
import { InfractionService } from 'src/app/services/infraction/infraction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { data } from 'jquery';

@Component({
  selector: 'app-infractioncreer',
  templateUrl: './infractioncreer.component.html',
  styleUrls: ['./infractioncreer.component.css']
})
export class InfractioncreerComponent implements OnInit {

  description:any;
  reference:any;
  categorieamende1:any;
  devise1:any;
  montant1:any;
  categorieamende2:any;
  devise2:any;
  montant2:any;
  langue:any;
  file:any;


  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any
  listcategorie:any

  constructor(
    private categorieservice : CategorieService,
    private infractionservice : InfractionService,
    private router: Router,
    private builder: FormBuilder,
    private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('je suis lancé')
    this.categorieservice.getAllCategorie().subscribe({
      next: data => {
        this.listcategorie = data
        console.log(this.listcategorie)
      },
      error: e => {
        console.log(e)
      }
    })
  }

  onSubmit() {
    this.router.navigate(['/dashboard/infractions']);
  }

  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier audio !";
      this.erreur=true;
      return;
    } else {
      this.file = e.target.files[0];
    }
  }

  addInfraction(
    description : string,
    reference : string,
    montant1 : string,
    devive1 : string,
    categorie1 : string,
    montant2 : string,
    devive2 : string,
    categorie2 : string,
    langue : string,
    audio : File) {
      return this.infractionservice.addInfraction(description,reference,montant1,devive1,categorie1,montant2,devive2,categorie2,langue,audio).subscribe({
        next: data => {
          console.log(data)
        },
        error: e=> {
          console.log(e)
        }
      })
  }


}
