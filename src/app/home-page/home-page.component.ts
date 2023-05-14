import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  currentPage?: string;

  // FA icons
  faApple = faApple;
  faStar = faStar;
  faGooglePlay = faGooglePlay;
  faGlobe = faGlobe;

  // For transitions
  isReviewVisible: boolean = false;
  isTaskManagementVisible: boolean = false;
  isRemeinderVisible: boolean = false;
  isProductivityVisible: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // For review
    const elementOffset =
      document.querySelector('.review')?.getBoundingClientRect().top || 0;
    if (scrollPosition > elementOffset - window.innerHeight) {
      this.isReviewVisible = true; // Set the visibility flag to trigger the animation
    } else {
      this.isReviewVisible = false;
    }

    // For taskManagement
    const taskManagementOffset =
      document.querySelector('.task-management')?.getBoundingClientRect().top ||
      0;
    if (scrollPosition > taskManagementOffset - window.innerHeight) {
      this.isTaskManagementVisible = true; // Set the visibility flag to trigger the animation
    } else {
      this.isTaskManagementVisible = false;
    }

    // For Remeinder
    const remeinderOffset =
      document.querySelector('.remeinder')?.getBoundingClientRect().top || 0;
    if (scrollPosition > remeinderOffset - window.innerHeight) {
      this.isRemeinderVisible = true; // Set the visibility flag to trigger the animation
    } else {
      this.isRemeinderVisible = false;
    }

    // For Productivity
    const productivityOffset =
      document.querySelector('.productivity')?.getBoundingClientRect().top || 0;
    if (scrollPosition > productivityOffset - window.innerHeight) {
      this.isProductivityVisible = true;
    } else {
      this.isProductivityVisible = false;
    }
  }

  constructor(private router: Router, private auth: AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPage = router.url;
      }
    });
  }

  ngOnInit(): void {
    this.auth.isUserSignedIn();
  }
}
