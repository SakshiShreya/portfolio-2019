import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { ProjectsService } from './projects.service';

export interface Project {
  name: string;
  description: string[];
  technologies: string[];
  date: string;
  link?: string;
  url?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {
  data: Project[];
  subscription: Subscription;

  constructor(private fbService: FirebaseService, private projService: ProjectsService) {
    if (!this.projService.Data) {
      this.subscription = this.fbService.getData('/projects').subscribe((data: Project[]) => {
        this.data = data;
        data.forEach(element => {
          let url = element.name.replace(/\s/g, '-');
          url = url.replace(/[^a-z\d-]/gi, '');
          element.url = url;
        });
        console.log(this.data);
        this.projService.Data = this.data;
      });
    } else {
      this.data = this.projService.Data;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
