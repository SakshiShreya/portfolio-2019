import { Component, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ExperiencesService } from './experiences.service';
import { Subscription } from 'rxjs';

export interface Experience {
  company: string;
  description?: string[];
  duration?: string;
  location?: string;
  profile?: string;
  technologies?: string[];
  link?: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperiencesService]
})
export class ExperiencesComponent implements OnDestroy {
  data: Experience[];
  subscription: Subscription;

  constructor(private fbService: FirebaseService, private expService: ExperiencesService) {
    this.subscription = this.fbService.getData('/experience').subscribe((data: Experience[]) => {
      this.data = data;
      console.log(this.data);
      this.expService.Data = this.data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
