import { Component } from '@angular/core';

// Fa faIcons
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faClipboardCheck,
  faArrowUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JJTodo';

  logedIn: boolean = false;
  collapsed: boolean = false;

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
  faArrowUp = faArrowUp;
  faBars = faBars;

  scroll(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }

  constructor() {}
}
