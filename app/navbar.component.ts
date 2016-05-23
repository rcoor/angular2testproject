import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
  styles: [`
    a.router-link-active::after{
      position: relative;
      top: 10px;
      content:' ';
     display: block;
     border: 1px solid #294c5f;
    }
    nav{
      background: none !important;
    }
    a{
      color: #294c5f !important;
      text-transform: uppercase;
      font-size: 90%;
      padding: 17px !important;
    }
    a:hover::after{
      position: relative;
      top: 10px;
      content:' ';
      display: block;
      border: 1px solid #294c5f;
    }

  `],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent { }
