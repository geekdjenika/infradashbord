import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConseilService } from 'src/app/services/conseil/conseil.service';
import Swal from 'sweetalert2';

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
  mconseil:any;

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

  getConseil(id: number) {
    this.conseilservice.getConseilById(id).subscribe({
      next: data => {
        this.mconseil = data
        this.conseil = this.mconseil.conseil
        console.log(this.mconseil)
      },
      error: e=> {
        console.log(e)
      }
    })
  }

  ajouterConseil() {
    this.router.navigate(['/dashboard/ajouterconseil']);
  }

  modifier(conseil: string, id: number) {
    this.conseilservice.updateConseil(conseil,id).subscribe({
      next: data => {
        console.log(data)
        Swal.fire({
          title: 'Modifié',
          text: 'Conseil modifié avec succès !',
          timer: 1000,
          icon: 'success'
        })
        window.location.reload()
      },
      error: e => {
        console.log(e)
        Swal.fire({
          title: 'Erreur !',
          text: 'Erreur verifiez que la description du conseil ne depasse pas 1000 caractères.',
          timer: 3000,
          icon: 'error'
        })
      }
    })
  }

}
