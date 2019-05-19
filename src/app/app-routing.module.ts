import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperiencesComponent },
  { path: 'certification', component: CertificationsComponent },
  { path: 'publication', component: PublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
