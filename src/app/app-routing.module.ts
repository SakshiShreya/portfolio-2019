import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experiences/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperiencesComponent, children: [{ path: ':id', component: ExperienceComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
