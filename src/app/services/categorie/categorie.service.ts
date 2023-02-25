import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  host = environment.host;

  constructor(private http : HttpClient) { }

  getAllCategorie() {
    return this.http.get(`${this.host}/categorie/get/all`);
  }

}
