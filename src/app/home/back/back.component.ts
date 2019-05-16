import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  @Output() flipped = new EventEmitter<void>();
  data: any[];

  constructor(private fbService: FirebaseService) {}

  ngOnInit() {
    this.fbService.getData('/').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  flip() {
    this.flipped.emit();
  }
}
