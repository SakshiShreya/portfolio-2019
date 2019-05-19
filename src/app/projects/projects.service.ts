import { Injectable } from '@angular/core';
import { Project } from './projects.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  data: Project[];

  constructor() {}

  set Data(data: Project[]) {
    this.data = data;
  }

  get Data() {
    return this.data;
  }
}
