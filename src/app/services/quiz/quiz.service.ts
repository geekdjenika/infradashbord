import { StorageService } from './../auth/storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  host = environment.host;

  constructor(private http : HttpClient, private storageservice : StorageService) { }

  getAllQuiz() {
    return this.http.get(`${this.host}/quiz/get/all`);
  }

  getQuiz(id: number) {
    return this.http.get(`${this.host}/quiz/get/${id}`);
  }

  addQuiz(label: string) {
    // const data = new FormData()
    // data.append('quiz', JSON.parse(`{"label":${label}}`))
    return this.http.post(`${this.host}/quiz/add`,{label})
  }

  deleteQuiz(id: number) {
    return this.http.delete(`${this.host}/quiz/delete/${id}`);
  }

  addQuestionsToQuiz(id: number, question1: string, question2: string, question3: string) {
    const data = new FormData()
    data.append('question1', question1)
    data.append('question2', question2)
    data.append('question3', question3)
    return this.http.post(`${this.host}/quiz/addquestions/${id}`,data)
  }

  //###########################QUESTIONS###################################
  getAllQuestion() {
    return this.http.get(`${this.host}/quiz/questions`);
  }

  superAddQuiz(question : string, reponse : string, mreponse1 : string, mreponse2 : string, mreponse3 : string) {
    const data = new FormData()
    data.append('question',question)
    data.append('reponse',reponse)
    data.append('mreponse1',mreponse1)
    data.append('mreponse2',mreponse2)
    data.append('mreponse3',mreponse3)
    return this.http.post(`${this.host}/quiz/addquestion/super/${this.storageservice.recupererUser().id}`,data)
  }

}
