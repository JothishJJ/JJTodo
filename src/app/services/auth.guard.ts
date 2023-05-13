import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, take, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // @ts-ignore
    return this.auth.user$.pipe(
      take(1),
      map((user) => !!user),
      tap((loggdIn) => {
        if (!loggdIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }

  constructor(private auth: AuthService, private router: Router) {}
}
