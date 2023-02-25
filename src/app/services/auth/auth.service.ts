import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { ConnexionService } from './connexion.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private connexionservice : ConnexionService,
    private store : StorageService,
    private router: Router) { }

  login(username: string, password: string) {
    return this.connexionservice.signin(username, password).subscribe({
      next: data => {
        this.store.enregistrer(data);
        console.log(data)
        Swal.fire('Connecté !', 'Vous êtes connecté avec succès !', 'success')
        this.router.navigate(['/dashboard/accueil'])
      },
      error: e => {
        console.log(e)
        Swal.fire({
          title: 'Erreur',
          text: 'Nom d\'utilisateur ou mot de passe incorrecte !',
          timer: 1000,
          icon: 'error'
        })
      }
    })
  }

  signUp(username: string, email: string, password: string, element : HTMLElement) {
    console.log('trtman ...')
    console.log('username ... '+username)
    console.log('email ... '+email)
    console.log('password ... '+password)
    return this.connexionservice.signup(username, email, password).subscribe({
      next: data => {
        console.log(data)
        Swal.fire('Compte créé !', 'Votre compte est créé avec succès !', 'success')
        element.classList.remove("right-panel-active");
      },
      error: e => {
        console.log(e)
        Swal.fire({
          title: 'Erreur',
          text: e,
          timer: 1000,
          icon: 'error'
        })
      }
    })
  }

}
