import { IsAuthenticatedGuard } from './../services/guard/is-authenticated.guard';
import { NgModule } from "@angular/core";
import { AccueilComponent } from "../pages/accueil/accueil.component";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { InfractionsComponent } from "../pages/infractions/infractions.component";
import { ConseilsComponent } from "../pages/conseils/conseils.component";
import { QuizComponent } from "../pages/quiz/quiz.component";
import { UserComponent } from "../pages/user/user.component";
import { InfractioncreerComponent } from "../pages/infractioncreer/infractioncreer.component";
import { ConseilcreerComponent } from "../pages/conseilcreer/conseilcreer.component";
import { QuizcreerComponent } from "../pages/quizcreer/quizcreer.component";
import { QuestiontoquizComponent } from "../pages/questiontoquiz/questiontoquiz.component";

const routes : Routes = [
    {
        path:"dashboard",
        component: DashboardComponent,
        children: [
            {
                path:'',
                redirectTo:'accueil',
                pathMatch: 'full'
            },

            {
                path: 'accueil',
                component: AccueilComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'infractions',
                component: InfractionsComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'ajouterinfraction',
                component: InfractioncreerComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'conseils',
                component: ConseilsComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'ajouterconseil',
                component: ConseilcreerComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'quiz',
                component: QuizComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'ajouterquiz',
                component: QuizcreerComponent,
                canActivate: [IsAuthenticatedGuard]
            },

            {
                path: 'questiontoquiz',
                component: QuestiontoquizComponent,
                canActivate: [IsAuthenticatedGuard]
            },


            {
                path: 'user',
                component: UserComponent,
                canActivate: [IsAuthenticatedGuard]
            },

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
