import { Component, OnInit } from '@angular/core';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // fa icons
  faGoogle = faGoogle;
  faApple = faApple;

  constructor() {}

  ngOnInit(): void {}
}
