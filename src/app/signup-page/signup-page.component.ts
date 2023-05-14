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

  email: string = '';
  password: string = '';

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  signUpWithEmail(e: any) {
    e.preventDefault();
    if (this.validateEmail(this.email)) {
      this.auth.signUpWithEmailAndPassword(this.email, this.password);
      this.email = '';
      this.password = '';
    } else {
      alert('Invalid email');
    }
  }

  ngOnInit(): void {
    this.auth.isUserSignedIn();
  }
}
