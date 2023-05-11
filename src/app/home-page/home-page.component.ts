import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {}

  currentPage?: string;
  logedIn = true;

  // FA icons
  faApple = faApple;
  faStar = faStar;
  faGooglePlay = faGooglePlay;
  faGlobe = faGlobe;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPage = router.url;
      }
    });

    if (this.logedIn) {
      router.navigate(['/app']);
    }
  }
}
