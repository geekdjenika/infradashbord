import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  host = environment.host;

  constructor(private http : HttpClient) { }

  signin(username: string, password: string) {
    return this.http.post(`${this.host}/auth/signin`,{ username, password });
  }

  signup(username: string, email: string, password: string) {
    return this.http.post(`${this.host}/auth/signup`,{ username, email, password });
  }
  
}
