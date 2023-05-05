import { Component } from '@angular/core';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClipboardCheck, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JJTodo';
  logedIn = false;

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
  faBars = faBars;
}
