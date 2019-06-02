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
      $('.menu-overlay').addClass('menu-open');
      $('.menu').css('overflow', 'visible');

      // since background changes when we open and close the menu
      // and also when we hover
      // and the delay of hover depends on --delay-out
      // so we have to handle --delay-out accordingly
      setTimeout(() => {
        this.els.each(function(j) {
          $(this).css('--delay-out', '0s');
        });
      }, count * 200);
    } else {
      $('.menu').addClass('closed');
      $('.menu-overlay').removeClass('menu-open');

      // there is a need to set overflow to hidden so that
      // the menu does not interfere with rest of UI
      setTimeout(() => {
        $('.menu').css('overflow', 'hidden');
      }, count * 200);
    }
  }
}
