import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './home/front/front.component';
import { BackComponent } from './home/back/back.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsService } from './projects/projects.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontComponent,
    BackComponent,
    ExperiencesComponent,
    CertificationsComponent,
    PublicationsComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    KeyboardShortcutsModule.forRoot(),
    HttpClientModule
  ],
  providers: [FirebaseService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
