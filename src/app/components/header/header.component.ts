import { Component, OnInit, HostListener } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mobile: boolean | undefined;
  screenHeight: number | undefined;
  screenWidth: number | undefined;

  logedIn = false;

  collapsed = false;

  // fa icons
  faBars = faBars;

  collapse(): void {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 1280) {
      this.mobile = true;
    }
  }

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {}
}
