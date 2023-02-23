import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infractions',
  templateUrl: './infractions.component.html',
  styleUrls: ['./infractions.component.css']
})
export class InfractionsComponent implements OnInit {

  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  page:number=1;

  description:any;
  reference:any;

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  ajouterInfraction() {
    this.router.navigate(['/dashboard/ajouterinfraction']);
  }

  modifier() {

  }

}
