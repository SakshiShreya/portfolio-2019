import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private afs: AngularFireDatabase) {}

  getData(path: string) {
    return this.afs.list(path).valueChanges();
  }
}
