import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Infraction } from 'src/app/models/infraction';
import { InfractionService } from 'src/app/services/infraction.service';

@Component({
  selector: 'app-infractioncreer',
  templateUrl: './infractioncreer.component.html',
  styleUrls: ['./infractioncreer.component.css']
})
export class InfractioncreerComponent implements OnInit {

  description:any;
  reference:any;
  categorieamende1:any;
  devise1:any;
  montant1:any;
  categorieamende2:any;
  devise2:any;
  montant2:any;
  langue:any;
  file:any;


  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any

  constructor(private infractionservice: InfractionService,
    private router: Router, private builder: FormBuilder,
    private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/dashboard/infractions']);
  }

  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier audio !";
      this.erreur=true;
      return;
    }
  }


}
