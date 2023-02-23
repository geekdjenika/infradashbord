import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  env = environment.host;

  constructor(private http : HttpClient) { }

  getAllInfraction() {
    
  }

}
