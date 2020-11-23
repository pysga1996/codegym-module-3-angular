import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  UrlSegment,
  Route,
  CanActivateChild, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './service/auth.service';
import {User} from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  loggedInUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedInUser.subscribe(next => {
      this.loggedInUser = next;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedInUser) {
      return true;
    } else {
      this.router.navigate(['/', 'login']).then();
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedInUser) {
      console.log(childRoute);
      console.log(state);
      return true;
    } else {
      this.router.navigate(['/', 'login']).then();
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedInUser) {
      return true;
    } else {
      this.router.navigate(['/', 'login']).then();
      return false;
    }
  }

}
