import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { ConseilcreerComponent } from './pages/conseilcreer/conseilcreer.component';
import { QuizcreerComponent } from './pages/quizcreer/quizcreer.component';
import { QuestiontoquizComponent } from './pages/questiontoquiz/questiontoquiz.component';
import { AuthInterceptorProvider } from './services/interceptor/auth.interceptor';
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
    InfractioncreerComponent,
    ConseilcreerComponent,
    QuizcreerComponent,
    QuestiontoquizComponent
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
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
