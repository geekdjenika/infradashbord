import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  page:number=1;
  Geeg:any = [1,2,3,4,5,6,7,8,9,0]

  conseil:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ajouterConseil() {
    this.router.navigate(['/dashboard/ajouterconseil']);
  }

  modifier() {

  }

}
