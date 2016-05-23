import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {UsersService} from './users.service'


@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent {
users: any;
constructor(private _usersService: UsersService){
}
ngOnInit(){
  this._usersService.getUsers()
  .subscribe(userData => {
    console.log(userData);
    this.users = userData;
  });
}

deleteUser(i: Number){
  this.users.splice(i, 1);
  this._usersService.deleteUsers(i);
}
}
