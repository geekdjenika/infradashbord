import { StorageService } from './../../services/auth/storage.service';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public storageservice!: StorageService;

  constructor() { }

  ngOnInit(): void {
  }

}
