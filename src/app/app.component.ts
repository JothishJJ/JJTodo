import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

// Fa faIcons
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faClipboardCheck,
  faBars,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JJTodo';
  logedIn = false;

  screenHeight: number | undefined;
  screenWidth: number | undefined;
  mobile: boolean | undefined;

  collapsed = false;

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
  faBars = faBars;
  faArrowUp = faArrowUp;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 1280) {
      this.mobile = true;
    }
  }

  collapse(): void {
    this.collapsed = !this.collapsed;
  }

  scroll(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  constructor() {
    this.onResize();
  }
}
