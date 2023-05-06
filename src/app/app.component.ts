import { Component } from '@angular/core';

// Fa faIcons
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClipboardCheck, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Components
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JJTodo';

  collapsed = false;

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
  faArrowUp = faArrowUp;

  scroll(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  constructor() {}
}
