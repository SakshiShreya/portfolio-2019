import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../experiences.service';
import { Experience } from '../experiences.component';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(private afs: AngularFireDatabase, private expService: ExperiencesService) {
    this.afs.list('/experience').valueChanges().subscribe((data: Experience[]) => {
      data.forEach(obj => {
        obj.link = obj.company.replace(/\s/g, '-');
      });
      this.expService.Data = data;
      console.log(this.expService.Data);
    });
  }

  ngOnInit() {}
}
