import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  host = environment.host;

  constructor(private http : HttpClient) { }

  getAllInfraction() {
    return this.http.get(`${this.host}/infraction/get/all`);
  }
}
