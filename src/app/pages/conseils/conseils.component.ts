import { StorageService } from './../../services/auth/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConseilService } from 'src/app/services/conseil/conseil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  page:number=1;
  listconseil:any;
  isCollapsed : boolean = false;

  conseil:any;
  mconseil:any;

  admin!: boolean

  constructor(
    private storageservice: StorageService,
    private conseilservice : ConseilService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAllConseil()

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  getConseil(id: number) {
    this.conseilservice.getConseilById(id).subscribe({
      next: data => {
        this.mconseil = data
        this.conseil = this.mconseil.conseil
        console.log(this.mconseil)
      },
      error: e=> {
        console.log(e)
      }
    })
  }

  getAllConseil() {
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
  }

  ajouterConseil() {
    this.router.navigate(['/dashboard/ajouterconseil']);
  }

  modifier(conseil: string, id: number) {
    this.conseilservice.updateConseil(conseil,id).subscribe({
      next: data => {
        console.log(data)
        Swal.fire({
          title: 'Modifié',
          text: 'Conseil modifié avec succès !',
          timer: 1000,
          icon: 'success'
        })
        window.location.reload()
      },
      error: e => {
        console.log(e)
        Swal.fire({
          title: 'Erreur !',
          text: 'Erreur verifiez que la description du conseil ne depasse pas 1000 caractères.',
          timer: 3000,
          icon: 'error'
        })
      }
    })
  }

  supprimer(id: number) {
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
        this.conseilservice.delete(id).subscribe({
          next: data => {
            console.log(data)
            this.getAllConseil()
            Swal.fire({
              title: 'Supprimée !',
              text: `Conseil supprimé avec succès, ${this.listconseil.length} conseils restants.`,
              timer: 5000,
              icon: 'success'
            })
          },
          error: e => {
            const rslt = e.error.text;
            console.log(e)
            if(rslt === 'Conseil supprimé avec succès !') {
              this.getAllConseil()
              Swal.fire({
                title: 'Supprimé !',
                text: `Conseil supprimé avec succès, ${this.listconseil.length} conseils restants.`,
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
    this.getAllConseil()
  }

}
