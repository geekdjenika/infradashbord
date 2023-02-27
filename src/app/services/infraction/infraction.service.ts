import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../auth/storage.service';

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  host = environment.host;

  constructor(private http : HttpClient, private storageservice : StorageService) { }

  getAllInfraction() {
    return this.http.get(`${this.host}/infraction/get/all`);
  }

  getInfractionByID(id : number) {
    return this.http.get(`${this.host}/infraction/get/${id}`);
  }

  updateInfraction(id : number,description : string, reference : string, langue : string, audio : File) {
    const data = new FormData();

    data.append('description', description)
    data.append('reference', reference)
    data.append('langue', langue)
    data.append('file', audio)

    return this.http.put(`${this.host}/infraction/update/${id}`,data);

  }

  addInfraction(
    description : string,
    reference : string,
    montant1 : string,
    devive1 : string,
    categorie1 : string,
    montant2 : string,
    devive2 : string,
    categorie2 : string,
    langue : string,
    audio : File) {

    const data = new FormData();

    data.append('description', description)
    data.append('reference', reference)
    data.append('categorieamende1', categorie1)
    data.append('devise1', devive1)
    data.append('montant1', montant1)
    data.append('categorieamende2', categorie2)
    data.append('devise2', devive2)
    data.append('montant2', montant2)
    data.append('file', audio)
    data.append('langue', langue)
    data.append('file', audio)

    return this.http.post(`${this.host}/infraction/addsuper`,data);

  }

  deleteInfraction(id : number) {
    return this.http.delete(`${this.host}/infraction/delete/${id}`);
  }

  importer(excel : File) {
    const data = new FormData();
    data.append('excel', excel)
    return this.http.post(`${this.host}/infraction/importer`,data);
  }

}
