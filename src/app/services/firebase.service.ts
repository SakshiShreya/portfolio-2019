import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore, private afs: AngularFireDatabase) {}

  getData(path: string) {
    return this.afs.list(path).valueChanges();
  }
}
