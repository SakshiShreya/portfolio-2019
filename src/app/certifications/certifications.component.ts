import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

export interface Certification {
  name: string;
  company: string;
  issued: string;
  link?: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnDestroy {
  data: Certification[];
  subscription: Subscription;

  constructor(private fbService: FirebaseService) {
    this.subscription = this.fbService.getData('/certifications').subscribe((data: Certification[]) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
