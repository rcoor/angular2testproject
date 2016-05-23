import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators, FORM_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {Router, RouteParams} from '@angular/router-deprecated';

import {UsersService} from './users.service'

import {UserValidators} from './userValidator';

import {Users} from './users';

@Component({
    selector: 'users',
    templateUrl: 'app/add-user.component.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AddUserComponent implements OnInit {
  signupForm: ControlGroup;
  userById: any;
  title: string;
  user = new Users();

  constructor(
    fb: FormBuilder,
    private _usersService: UsersService,
    private _router: Router,
    private _routeParams: RouteParams
  ) {

    this.signupForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      address: fb.group({
        street: [''],
        suite: [''],
        zip: [''],
        city: ['']
      })
    })
  }
  addUser(){
    if(this.signupForm.valid){
      console.log("Successfully saved user")
      this._usersService.saveUser(this.signupForm)
      .subscribe(
        res => {
            if (res.ok)
              console.log("Successfully posted")
              this._router.navigate(['Users']);
        }
      );
    }
  }
  ngOnInit(){
    this.user.name = '';
    this.user.email ='';
    this.user.phone = '';
    this.user.address.street = '';
    this.user.address.suite = '';
    this.user.address.zipcode = '';
    this.user.address.city = '';

    console.log(this._routeParams)
    var id = this._routeParams.get("id");
    this.title = id ? "Edit user" : "New User";
    if (!id)
      return;
    this._usersService.getUser(id)
    .subscribe( res => {
      this.user = res;
    });
  }
}
