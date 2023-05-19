import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  trigger,
  style,
  transition,
  animate,
  query,
} from '@angular/animations';

import { AuthService } from './services/auth.service';

// Fa faIcons
import {
  faInstagram,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
  faClipboardCheck,
  faArrowUp,
  faBars,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        query(':enter', [
          style({ height: '0', scale: 0 }),
          animate('200ms ease-in'),
          style({ height: '80vh', scale: 100 }),
        ]),
      ]),
      transition(':leave', [
        query(':leave', [
          style({ height: '80vh', opacity: 100 }),
          animate('100ms ease-in'),
          style({ height: '0', opacity: '0%' }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'JJTodo';

  collapsed: boolean = false;

  currentPage?: string;

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
  faArrowUp = faArrowUp;
  faBars = faBars;
  faGithub = faGithub;
  faMinus = faMinus;

  scroll(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  collapse() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      document.getElementById('body')?.classList.add('no-scroll');
    } else {
      document.getElementById('body')?.classList.remove('no-scroll');
    }
  }

  constructor(private router: Router, public auth: AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPage = router.url;
      }
    });
  }
}
