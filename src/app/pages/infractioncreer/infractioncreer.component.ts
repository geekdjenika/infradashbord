import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Infraction } from 'src/app/models/infraction';
import { InfractionService } from 'src/app/services/infraction.service';

@Component({
  selector: 'app-infractioncreer',
  templateUrl: './infractioncreer.component.html',
  styleUrls: ['./infractioncreer.component.css']
})
export class InfractioncreerComponent implements OnInit {

  infraction: Infraction = new Infraction();
  description : any;
  reference : any;
  submitted = false;

  constructor(private infractionservice: InfractionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    // this.infractionservice.createEmployee(this.employee)
    // .subscribe(data => console.log(data), error => console.log(error));
    this.infraction = new Infraction();
    this.router.navigate(['/dashboard/infractions']);
  }

}
