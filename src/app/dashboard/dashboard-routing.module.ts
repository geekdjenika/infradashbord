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
            },

            {
                path: 'infractions',
                component: InfractionsComponent,
            },

            {
                path: 'ajouterinfraction',
                component: InfractioncreerComponent,
            },

            {
                path: 'conseils',
                component: ConseilsComponent,
            },

            {
                path: 'ajouterconseil',
                component: ConseilcreerComponent,
            },

            {
                path: 'quiz',
                component: QuizComponent,
            },

            {
                path: 'ajouterquiz',
                component: QuizcreerComponent,
            },

            {
                path: 'questiontoquiz',
                component: QuestiontoquizComponent,
            },


            {
                path: 'user',
                component: UserComponent,
            },
            
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }