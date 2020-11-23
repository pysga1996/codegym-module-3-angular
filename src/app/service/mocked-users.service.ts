import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MockedUsersService {

  private USER_LIST: any = {};

  constructor() {
    const userList = JSON.parse(localStorage.getItem('userList'));
    if (!userList) {
      localStorage.setItem('userList', JSON.stringify([]));
    } else {
      this.USER_LIST = userList;
    }
  }

  addUser(user: User): void {
    if (!this.USER_LIST[user.email]) {
      this.USER_LIST[user.email] = user;
      localStorage.setItem('userList', JSON.stringify(this.USER_LIST));
    }
  }

  getUser(email: string): User {
    return this.USER_LIST[email];
  }

  deleteUser(email: string): void {

  }
}
