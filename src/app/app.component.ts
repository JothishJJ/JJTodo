import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'JJTodo';
  logedIn = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  // Fa icons
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClipboardCheck = faClipboardCheck;
}
