import { NgModule } from "@angular/core";
import { AccueilComponent } from "../pages/accueil/accueil.component";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { InfractionsComponent } from "../pages/infractions/infractions.component";
import { ConseilsComponent } from "../pages/conseils/conseils.component";
import { QuizComponent } from "../pages/quiz/quiz.component";
import { UserComponent } from "../pages/user/user.component";

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
                path: 'conseils',
                component: ConseilsComponent,
            },

            {
                path: 'quiz',
                component: QuizComponent,
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