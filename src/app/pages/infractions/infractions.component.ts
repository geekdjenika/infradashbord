import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infractions',
  templateUrl: './infractions.component.html',
  styleUrls: ['./infractions.component.css']
})
export class InfractionsComponent implements OnInit {

  Geeg:any = [1,2,3,4,5,6,7,8,9,0]
  employees = [
    {
      "name": "Djenika",
      "email": "djenikaa@gmail.com",
      "department": "Informatique",
      "phone": "78816744"
    },
    {
      "name": "Djenika",
      "email": "djenikaa@gmail.com",
      "department": "Informatique",
      "phone": "78816744"
    },
    {
      "name": "Djenika",
      "email": "djenikaa@gmail.com",
      "department": "Informatique",
      "phone": "78816744"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
