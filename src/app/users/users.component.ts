import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.loadUsers().subscribe(userList => {
      this.userList = userList;
    });
  }

}


