import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  USER_KEY = environment.userstore;

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public enregistrer(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public recupererUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public connexionReussi(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      // if(localStorage.getItem('valid') === 'true') {
      //   return true;
      // }
      return true;

    }

    return false;
  }

  public isAdmin(): boolean {
    return this.recupererUser().roles.includes('ADMIN')
  }

}
