import { Component, OnInit } from '@angular/core';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // FA icons
  faApple = faApple;
  faStar = faStar;
  faGooglePlay = faGooglePlay;
  faGlobe = faGlobe;
}
