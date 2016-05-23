import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {NavbarComponent} from './navbar.component';
import {UsersComponent} from './users.component';
import {AddUserComponent} from './add-user.component';
import {PostsComponent} from './posts.component';

@RouteConfig([
  {path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true},
    {path: '/users/:id', name: 'EditUser', component: AddUserComponent},
    {path: '/users/adduser', name: 'AddUser', component: AddUserComponent},
  {path: '/posts', name: 'Posts', component: PostsComponent},
  {path: '/*other', name: 'other', redirectTo: ['Users'] }
])

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <div class="container" style="padding-top: 70px">
      <router-outlet></router-outlet>
    </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
