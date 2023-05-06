import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

// Fa faIcons
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClipboardCheck, faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import { HeaderComponent } from './components/header/header.component';

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
  constructor() {
    this.onResize();
  }
}
