import { Component, OnInit } from '@angular/core';
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
  langue:any;
  file:any;
  resultatmodif: any

  listinfraction : any
  moninfraction : any

  constructor(
    private infractionservice : InfractionService,
    private router: Router) {

  }

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

  }

  ajouterInfraction() {
    this.router.navigate(['/dashboard/ajouterinfraction']);
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
        window.location.reload()
      },
      error: e=> {
        console.log(e)
      }
    })
  }

}
