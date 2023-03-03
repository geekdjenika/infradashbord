import { StorageService } from './../../services/auth/storage.service';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';

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

  admin!: boolean

  searhText: any

  constructor(private utilisateurservice : UtilisateurService, private storageservice: StorageService) { }

  ngOnInit(): void {
    this.getAllUser()

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  getAllUser() {
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

  deleteUser(id : number) {
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
        this.utilisateurservice.deleteUser(id).subscribe({
          next: data => {
            console.log(data)
            this.getAllUser()
            Swal.fire({
              title: 'Supprimé !',
              text: `Utilisateur supprimé avec succès, ${this.listutilisateur.length - 1} utilisateurs restants.`,
              timer: 5000,
              icon: 'success'
            })
          },
          error: e => {
            const rslt = e.error.text;
            console.log(e)
            if(rslt === 'Supprimé avec succès !') {
              this.getAllUser()
              Swal.fire({
                title: 'Supprimé !',
                text: `Utilisateur supprimée avec succès, ${this.listutilisateur.length - 1} utilisateur restants.`,
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
    this.getAllUser()

  }

  rendreAdmin(id: number, nom : string) {
    Swal.fire({
      title: 'Attention !',
      text: `${nom} va être adminisrateur et pourra ajouter, modifier et supprimer des données !`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, confirmer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurservice.adminUser(id).subscribe({
          next: data => {
            var res = data
            console.log(res)
            Swal.fire({
              title: 'Administrateur !',
              text: `${nom} est desormais administrateur !`,
              timer: 3000,
              icon: 'success'
            })
            this.getAllUser()
          },
          error: e => {
            console.log(e)
            Swal.fire({
              title: 'Erreur !',
              text: `Opération échouée !`,
              timer: 3000,
              icon: 'error'
            })
          }
        })
      }
    })
  }

}
