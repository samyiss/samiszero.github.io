import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactComponent } from "./contact/contact.component";
import { ResumeComponent } from "./resume/resume.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent }
];
