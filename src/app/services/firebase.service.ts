import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  getData(path: string): Observable<any> {
    return this.http.get(`https://portfolio-dd5f6.firebaseio.com${path}.json`);
  }
}
