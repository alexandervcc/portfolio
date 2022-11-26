import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css'],
})
export class FloatingButtonComponent implements OnInit {
  windowScrolled: boolean = false;

  ngOnInit(): void {}

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.windowScrolled = true;
    } else if (window.pageYOffset < 100) {
      this.windowScrolled = false;
    }
  }

  toTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
