import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { StorageService } from './../services/auth/storage.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  monuser: any

  admin!: boolean

  constructor(private observer: BreakpointObserver, private router: Router, private storageservice : StorageService, private utilisateurservice : UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurservice.getUserConnecte().subscribe({
      next: data=> {
        this.monuser = data;
      },
      error: e => {
        console.log(e)
      }
    })

    this.admin = this.storageservice.isAdmin()
    console.log(this.admin)

  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  deconnecter() {
    this.storageservice.clean()
    window.location.reload()
  }


}
