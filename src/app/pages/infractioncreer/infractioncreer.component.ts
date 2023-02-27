import { CategorieService } from './../../services/categorie/categorie.service';
import { InfractionService } from 'src/app/services/infraction/infraction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { data } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infractioncreer',
  templateUrl: './infractioncreer.component.html',
  styleUrls: ['./infractioncreer.component.css']
})
export class InfractioncreerComponent implements OnInit {

  description:string = '';
  reference:string = '';
  categorieamende1:string = 'Gros porteurs';
  devise1:string = '';
  montant1:string = '';
  categorieamende2:string = 'Gros porteurs';
  devise2:string = '';
  montant2:string = '';
  langue:string = 'bm';
  file:any;

  infraction:any

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any
  listcategorie:any
  listlangue:any

  constructor(
    private categorieservice : CategorieService,
    private infractionservice : InfractionService,
    private router: Router,
    private builder: FormBuilder,
    private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorieservice.getAllCategorie().subscribe({
      next: data => {
        this.listcategorie = data
        console.log(this.listcategorie)
      },
      error: e => {
        console.log(e)
      }
    })

    this.categorieservice.getAllLangue().subscribe({
      next: data => {
        this.listlangue = data
        console.log(this.listlangue)
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
      if(description === '' || reference === '') {
        Swal.fire({
          title: 'Erreur !',
          text: 'Renseigner les champs obligatoire !',
          timer: 1500,
          icon: 'error'
        })
        return
      } else {
        return this.infractionservice.addInfraction(description,reference,montant1,devive1,categorie1,montant2,devive2,categorie2,langue,audio).subscribe({
          next: data => {
            console.log(data)
            this.infraction = data
            Swal.fire({
              title: 'Ajouté avec succès !',
              text: this.infraction.description,
              timer: 1000,
              icon: 'success'
            })
            this.router.navigate(['/dashboard/infractions']);
          },
          error: e=> {
            const status = e.error.status;
            if(status == 500) {
              Swal.fire({
                title: 'Ajouté avec succès !',
                text: 'Infraction ajoutée avec succès !',
                timer: 1000,
                icon: 'success'
              })
              this.router.navigate(['/dashboard/infractions']);
            } else {
              console.log(e)
              Swal.fire({
                title: 'Erreur !',
                text: e.error.text,
                timer: 1000,
                icon: 'error'
              })
            }
          }
        })
      }
  }


}
