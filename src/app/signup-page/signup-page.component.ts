import { Component, OnInit } from '@angular/core';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  // fa icons
  faGoogle = faGoogle;
  faGithub = faGithub;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
