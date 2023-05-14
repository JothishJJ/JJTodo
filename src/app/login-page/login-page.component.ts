import { Component, OnInit } from '@angular/core';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // fa icons
  faGoogle = faGoogle;
  faGithub = faGithub;

  email: string = '';
  password: string = '';

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  constructor(public auth: AuthService) {}

  signInWithEmail(e: any) {
    e.preventDefault();

    if (this.validateEmail(this.email)) {
      this.auth.signInWithEmailAndPassword(this.email, this.password);
    } else {
      alert('Invalid email');
    }
  }

  ngOnInit(): void {
    this.auth.isUserSignedIn();
  }
}
