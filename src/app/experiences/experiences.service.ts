import { Injectable } from '@angular/core';
import { Experience } from './experiences.component';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  data: Experience[];

  constructor() {}

  set Data(data: Experience[]) {
    this.data = data;
  }

  get Data() {
    return this.data;
  }
}
