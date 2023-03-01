import { StorageService } from './../../services/auth/storage.service';
import { CategorieService } from './../../services/categorie/categorie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InfractionService } from 'src/app/services/infraction/infraction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infractions',
  templateUrl: './infractions.component.html',
  styleUrls: ['./infractions.component.css']
})
export class InfractionsComponent implements OnInit {

  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  page:number=1;

  message!: String;
  erreur!: Boolean;
  mid!:number;
  description:any;
  reference:any;
  langue:string = 'bm';
  file:any;
  resultatmodif: any
  listlangue:any

  listinfraction : any
  moninfraction : any

  excel:any;
  listexcel:any;

  admin!: boolean

  constructor(
    private storageservice: StorageService,
    private categorieservice : CategorieService,
    private infractionservice : InfractionService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.getAllInfraction()

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

  ajouterInfraction() {
    this.router.navigate(['/dashboard/ajouterinfraction']);
  }

  getAllInfraction() {
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
  }

  getInfraction(id : number) {
    this.infractionservice.getInfractionByID(id).subscribe({
      next: data => {
        this.moninfraction = data;
        this.description = this.moninfraction.description;
        this.reference = this.moninfraction.reference;
        this.mid = this.moninfraction.id;
        console.log(this.moninfraction)
      },
      error: e => {
        console.log(e)
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

  selectExcel(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier excel !";
      this.erreur=true;
      return;
    } else {
      this.excel = e.target.files[0];
    }
  }

  importer(excel : File) {
    this.infractionservice.importer(excel).subscribe({
      next: data => {
        this.listexcel = data;
        console.log(this.listexcel)
        Swal.fire({
          title: 'Importé !',
          text: `${this.listexcel.length} infraction importée avec succès !`,
          timer: 10000,
          icon: 'success'
        })
        window.location.reload()
        // this.getAllInfraction()
      },
      error: e=> {
        console.log(e)

      }
    })
  }

  modifier(id : number,description : string, reference : string, langue : string, audio : File) {
    this.infractionservice.updateInfraction(id,description,reference,langue,audio).subscribe({
      next: data => {
        this.resultatmodif = data
        console.log(data)
        Swal.fire({
          title: 'Modifié',
          text: 'Infraction modifiée avec succès !',
          timer: 1000,
          icon: 'success'
        })
        // this.getAllInfraction()
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

  supprimerInfraction(id : number) {
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
        this.infractionservice.deleteInfraction(id).subscribe({
          next: data => {
            console.log(data)
            this.getAllInfraction()
            Swal.fire({
              title: 'Supprimée !',
              text: `Infraction supprimée avec succès, ${this.listinfraction.length - 1} infractions restantes.`,
              timer: 5000,
              icon: 'success'
            })
          },
          error: e => {
            const rslt = e.error.text;
            console.log(e)
            if(rslt === 'Infraction supprimée avec succès !') {
              this.getAllInfraction()
              Swal.fire({
                title: 'Supprimée !',
                text: `Infraction supprimée avec succès, ${this.listinfraction.length -1} infractions restantes.`,
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
    this.getAllInfraction()
  }

}
