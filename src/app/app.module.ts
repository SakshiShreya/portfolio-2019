import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { environment } from '../environments/environment';

import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './home/front/front.component';
import { BackComponent } from './home/back/back.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FrontComponent, BackComponent, ExperiencesComponent, CertificationsComponent, PublicationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    KeyboardShortcutsModule.forRoot()
  ],
  providers: [AngularFirestore, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
