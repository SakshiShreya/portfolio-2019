import { Component, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
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
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnDestroy {
  data: Experience[];
  subscription: Subscription;

  constructor(private fbService: FirebaseService) {
    this.subscription = this.fbService.getData('/experience').subscribe((data: Experience[]) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
