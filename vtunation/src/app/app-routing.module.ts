import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdmissionsComponent } from './admissions/admissions.component';
import { InternshipComponent } from './internship/internship.component';
import { LearningComponent } from './learning/learning.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'internship', canActivate: [AuthGuard], component: InternshipComponent },
  { path: 'admissions', canActivate: [AuthGuard],  component: AdmissionsComponent },
  { path: 'learning', canActivate: [AuthGuard], component: LearningComponent },
  { path: 'project', canActivate: [AuthGuard], component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
