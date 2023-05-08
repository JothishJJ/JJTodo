import { Component, OnInit } from '@angular/core';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  // fa icons
  faGoogle = faGoogle;
  faApple = faApple;

  constructor() {}

  ngOnInit(): void {}
}
