import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

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

  currentPage?: string;

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

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPage = router.url;
      }
    });
  }
}
