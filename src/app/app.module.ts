import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { InfractionsComponent } from './pages/infractions/infractions.component';
import { ConseilsComponent } from './pages/conseils/conseils.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UserComponent } from './pages/user/user.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { InfractioncreerComponent } from './pages/infractioncreer/infractioncreer.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProfilComponent,
    InfractionsComponent,
    ConseilsComponent,
    QuizComponent,
    UserComponent,
    AuthComponent,
    DashboardComponent,
    InfractioncreerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
