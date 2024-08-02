import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AmendeComponent } from './pages/amende/amende.component';
import { RouterModule } from '@angular/router';

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
    QuestiontoquizComponent,
    AmendeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
