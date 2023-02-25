import { StorageService } from './../auth/storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  host = environment.host;

  constructor(private http : HttpClient, private storageservice : StorageService) { }

  getAllUsers() {
    return this.http.get(`${this.host}/user/users`);
  }

  getUserConnecte() {
    return this.http.get(`${this.host}/user/${this.storageservice.recupererUser().id}`)
  }


}
