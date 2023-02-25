import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseilcreer',
  templateUrl: './conseilcreer.component.html',
  styleUrls: ['./conseilcreer.component.css']
})
export class ConseilcreerComponent implements OnInit {


  conseil:any;
  langue:any;
  file:any;

  message!: String;
  erreur!: Boolean;
  alertNomTrue:any
  alertTrue:any
  messageerror:any


  constructor(private router: Router) { }


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
    } else {
      this.file = e.target["file"][0];
    }
  }

}
