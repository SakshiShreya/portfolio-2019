import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

export interface Publication {
  name: string;
  conference?: string;
  role?: string;
  date?: string;
  location?: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnDestroy {
  data: Publication[];
  subscription: Subscription;

  constructor(private fbService: FirebaseService) {
    this.subscription = this.fbService.getData('/publications').subscribe((data: Publication[]) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
