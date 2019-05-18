import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'experience', component: ExperiencesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
