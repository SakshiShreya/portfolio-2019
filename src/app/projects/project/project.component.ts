import { Component, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { Project } from '../projects.component';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
  data: Project[];
  subscription: Subscription;
  projectName: string;
  project: Project;

  constructor(private fbService: FirebaseService, private projService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectName = this.route.snapshot.params.id;
    console.log(this.projectName);

    if (!this.projService.Data) {
      console.log(this.subscription);
      this.subscription = this.fbService.getData('/projects').subscribe((data: Project[]) => {
        this.data = data;
        data.forEach(element => {
          let url = element.name.replace(/\s/g, '-');
          url = url.replace(/[^a-z\d-]/gi, '');
          element.url = url;
        });
        console.log(this.data);
        this.projService.Data = this.data;
        this.func();
      });
    } else {
      this.data = this.projService.Data;
      this.func();
    }
  }

  func() {
    this.project = this.data.find(element => element.url === this.projectName);
    console.log(this.project);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
