import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/auth/storage.service';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { InfractionService } from 'src/app/services/infraction/infraction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amende',
  templateUrl: './amende.component.html',
  styleUrls: ['./amende.component.css']
})
export class AmendeComponent implements OnInit {

  page:number=1;
  message!: String;
  erreur!: Boolean;
  mid!:number;
  langue:string = 'bm';
  file:any;
  resultatmodif: any
  listlangue:any

  listamende : any
  monamende : any
  monmontant : any

  admin!: boolean

  searhText: any

  constructor(
    private storageservice: StorageService,
    private categorieservice : CategorieService,
    private infractionservice : InfractionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllAmende()

    this.categorieservice.getAllLangue().subscribe({
      next: data => {
        this.listlangue = data
        console.log(this.listlangue)
      },
      error: e => {
        console.log(e)
      }
    })

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  getAllAmende() {
    //Infractions
    this.infractionservice.getAllFine().subscribe({
      next: data => {
        this.listamende = data;
        console.log(this.listamende)
      },
      error: e => {
        console.log(e)
      }
    })
  }

  getFine(id : number) {
    this.infractionservice.getFineById(id).subscribe({
      next: data => {
        this.monamende = data;
        this.monmontant = this.monamende.montant.montant
        // this.description = this.moninfraction.description;
        // this.reference = this.moninfraction.reference;
        this.mid = this.monamende.id;
        console.log(this.monamende)
      },
      error: e => {
        console.log(e)
      }
    })
  }

  modifier(id : number,langue : string,audio : File) {
    this.infractionservice.updateFine(audio,langue,id).subscribe({
      next: data => {
        this.resultatmodif = data
        console.log(data)
        Swal.fire({
          title: 'Ajouté !',
          text: 'Vocal ajouté avec succès !',
          timer: 1000,
          icon: 'success'
        })
        window.location.reload()
      },
      error: e=> {
        console.log(e)
        Swal.fire({
          title: 'Erreur !',
          text: 'Erreur verifiez que le fichier ne depasse pas 3Mo.',
          timer: 3000,
          icon: 'error'
        })
      }
    })
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



}
