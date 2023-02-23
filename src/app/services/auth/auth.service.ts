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
        Swal.fire('Erreur', 'Nom d\'utilisateur ou mot de passe incorrecte !', 'error')
      }
    })
  }

  signUp(username: string, email: string, password: string) {
    console.log('trtman ...')
    return this.connexionservice.signup(username, email, password).subscribe({
      next: data => {
        console.log(data)
        Swal.fire('Compte créé !', 'Votre compte est créé avec succès !', 'success')
        localStorage.setItem('signup','true')
      },
      error: e => {
        console.log(e.error.message)
        Swal.fire('Erreur', e.error.message, 'error')
        localStorage.setItem('signup','false')
      }
    })
  }

}
