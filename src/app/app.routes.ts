import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactComponent } from "./contact/contact.component";
import { ResumeComponent } from "./resume/resume.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];
