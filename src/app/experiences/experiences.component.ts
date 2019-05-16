import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ExperiencesService } from './experiences.service';

export interface Experience {
  company: string;
  description: string[];
  duration: string;
  location: string;
  profile: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperiencesService]
})
export class ExperiencesComponent implements OnInit {
  data: Experience[];

  constructor(private fbService: FirebaseService, private expService: ExperiencesService) {
    this.fbService.getData('/experience').subscribe((data: Experience[]) => {
      this.data = data;
      this.data.forEach(obj => {
        obj.link = obj.company.replace(/\s/g, '-');
      });
      console.log(this.data);
      this.expService.Data = this.data;
    });
  }

  ngOnInit() {}
}
