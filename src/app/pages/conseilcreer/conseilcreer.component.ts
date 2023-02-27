import { ConseilService } from 'src/app/services/conseil/conseil.service';
import { InfractionService } from './../../services/infraction/infraction.service';
import { CategorieService } from './../../services/categorie/categorie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conseilcreer',
  templateUrl: './conseilcreer.component.html',
  styleUrls: ['./conseilcreer.component.css']
})
export class ConseilcreerComponent implements OnInit {


  conseil:string = '';
  infraction:string = '';
  langue:string = 'bm';
  file:any;

  listlangue:any
  listinfraction:any

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any


  constructor(
    private conseilservice: ConseilService,
    private infractionservice: InfractionService,
    private router: Router,
    private categorieservice : CategorieService) { }


  ngOnInit(): void {
    this.categorieservice.getAllLangue().subscribe({
      next: data => {
        this.listlangue = data
        console.log(this.listlangue)
      },
      error: e => {
        console.log(e)
      }
    })
    this.getAllInfraction()
  }

  onSubmit(conseil: string, infraction: string, langue: string, audio: File) {
    if(conseil === '') {
      Swal.fire({
        title: 'Erreur !',
        text: 'Le champs conseil est obligatoire !',
        timer: 1500,
        icon: 'error'
      })
      return
    } else {
      return this.conseilservice.addConseil(conseil,infraction,langue,audio).subscribe({
        next: data => {
          const resultat = data;
          console.log(resultat)
          Swal.fire({
            title: 'Ajouté avec succès !',
            text: 'Conseil ajouté avec succès.',
            timer: 1000,
            icon: 'success'
          })
          this.router.navigate(['/dashboard/conseils']);
        },
        error: e=> {
          console.log(e)
          Swal.fire({
            title: 'Erreur !',
            text: 'Erreur lors de l\'ajout du conseil !',
            timer: 1500,
            icon: 'error'
          })
        }
      })
    }


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

  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier audio !";
      this.erreur=true;
      return;
    } else {
      this.file = e.target["files"][0];
    }
  }

}
