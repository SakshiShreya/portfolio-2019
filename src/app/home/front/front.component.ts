import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  @Output() flipped = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  flip() {
    this.flipped.emit();
  }

}
