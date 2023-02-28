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

  addConseil(conseil: string, infraction: string, langue: string, audio: File) {
    const data = new FormData()
    data.append('conseil', conseil)
    data.append('langue', langue)
    data.append('file', audio)
    if(infraction !== '') {
      data.append('infraction',infraction);
    }

    return this.http.post(`${this.host}/conseil/add`,data);
  }

  updateConseil(conseil: string, id: number) {
    const data = new FormData()
    data.append('conseil', conseil)

    return this.http.put(`${this.host}/conseil/update/${id}`,data);
  }

  getConseilById(id: number) {
    return this.http.get(`${this.host}/conseil/get/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.host}/conseil/delete/${id}`);
  }

}
