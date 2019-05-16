import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  isCover = true;
  shortcuts: ShortcutInput[] = [];

  constructor() {}

  ngOnInit() {
    const base = document.querySelector('.base') as HTMLElement;
    base.style.height = '100vh';
  }

  ngAfterViewInit() {
    this.shortcuts.push({
      key: ['ctrl + m'],
      label: 'Help',
      description: 'Leiond',
      command: e => this.flipped(),
      preventDefault: true
    });
  }

  flipped() {
    this.isCover = !this.isCover;
    const base = document.querySelector('.base') as HTMLElement;
    const appFront = document.querySelector('app-front');
    const appBack = document.querySelector('app-back');
    if (this.isCover) {
      appFront.classList.add('open');
      appFront.classList.remove('close');
      appBack.classList.remove('open');
      appBack.classList.add('close');
      base.style.height = '100vh';
    } else {
      appFront.classList.add('close');
      appFront.classList.remove('open');
      appBack.classList.remove('close');
      appBack.classList.add('open');
      setTimeout(() => {
        base.style.height = 'auto';
      }, 1000);
    }
  }
}
