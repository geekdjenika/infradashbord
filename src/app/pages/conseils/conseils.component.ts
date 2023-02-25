import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConseilService } from 'src/app/services/conseil/conseil.service';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  page:number=1;
  listconseil:any;
  isCollapsed : boolean = false;

  conseil:any;

  constructor(
    private conseilservice : ConseilService,
    private router: Router) { }

  ngOnInit(): void {

    //Conseil
    this.conseilservice.getAllConseil().subscribe({
      next: data => {
        this.listconseil = data;
        console.log(this.listconseil)
      },
      error: e => {
        console.log(e)
      }
    })

  }

  ajouterConseil() {
    this.router.navigate(['/dashboard/ajouterconseil']);
  }

  modifier() {

  }

}
