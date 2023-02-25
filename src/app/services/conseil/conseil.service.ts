import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  host = environment.host;

  constructor(private http : HttpClient) { }

  getAllConseil() {
    return this.http.get(`${this.host}/conseil/get/all`);
  }

}
