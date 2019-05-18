import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  $: any;
  els: any;
  count: number;

  ngOnInit() {
    this.els = $('.menu li, .menu header');
    this.count = this.els.length;
    const groupLength = Math.ceil(this.count / 3);
    let groupNumber = 0;
    let i = 1;

    $('.menu').css('--count', this.count + '');
    this.els.each(function(j) {
      if (i > groupLength) {
        groupNumber++;
        i = 1;
      }
      $(this).attr('data-group', groupNumber);
      i++;
    });

    this.toggle();
  }

  toggle() {
    const count = this.count;
    this.els.each(function(j) {
      $(this).css('--top', $(this)[0].getBoundingClientRect().top + $(this).attr('data-group') * -15 - 20 + 'px');
      $(this).css('--delay-in', j * 0.1 + 's');
      $(this).css('--delay-out', (count - j) * 0.1 + 's');
    });

    if ($('.menu').hasClass('closed')) {
      $('.menu').removeClass('closed');
      $('.menu').css('overflow', 'visible');
    } else {
      $('.menu').addClass('closed');
      setTimeout(() => {
        $('.menu').css('overflow', 'hidden');
      }, count * 200);
    }
  }
}
