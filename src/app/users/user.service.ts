import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of, throwError } from 'rxjs';
import { USER_LIST } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: Array<User>;

  constructor() { }

  public loadUsers(): Observable<User[]> {
    return of(USER_LIST);
  }
}
