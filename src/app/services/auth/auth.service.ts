import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConnexionService } from './connexion.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private connexionservice : ConnexionService,
    private store : StorageService) { }

  login(username: string, password: string) {
    return this.connexionservice.signin(username, password).pipe(
      tap((response: any) => {
        this.store.enregistrer(response);
        // this.store.connexionReussi
      })
    );
  }

  signUp(username: string, email: string, password: string) {
    return this.connexionservice.signup(username, email, password).pipe(
      tap((response: any) => {
        //this.store.enregistrer(response);
        // this.store.connexionReussi
      })
    );
  }

}
