import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [1,2,3,4,5,6,7,8,9,0];
  longueur: any;
  page:number=1;
  responsive = true

  constructor() { }

  ngOnInit(): void {
  }

}
