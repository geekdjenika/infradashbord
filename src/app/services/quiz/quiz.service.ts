import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  host = environment.host;

  constructor(private http : HttpClient) { }

  getAllQuiz() {
    return this.http.get(`${this.host}/quiz/get/all`);
  }

}
