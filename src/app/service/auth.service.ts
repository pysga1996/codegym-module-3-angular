import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {MockedUsersService} from './mocked-users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>
  (JSON.parse(sessionStorage.getItem('user')));

  constructor(private router: Router, private mockedUsersService: MockedUsersService) {
  }

  login(loginInfo: User): void {
    const mockUser: User = this.mockedUsersService.getUser(loginInfo.email);
    if (mockUser && mockUser.password === loginInfo.password) {
      sessionStorage.setItem('user', JSON.stringify(loginInfo));
      this.loggedInUser.next(loginInfo);
      this.router.navigate(['/', 'home']).then(r => r);
    } else {
      this.router.navigate(['/', 'login']).then(r => r);
    }
  }

  logout(navigateToLoginPage?: boolean): void {
    sessionStorage.removeItem('user');
    this.loggedInUser.next(null);
    if (navigateToLoginPage) {
      this.router.navigate(['/', 'login']).then(r => r);
    }
  }
}
