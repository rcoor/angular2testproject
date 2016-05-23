import {Component, OnInit, OnDestroy} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {SpinnerComponent} from './spinner.component';
import {Location} from '@angular/common'
import {Observable} from 'rxjs/Rx';

import {PostsService} from './posts.service';
import {UsersService} from './users.service';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts.component.html',
    styles: [
      `
      .posts li	{	cursor:	default;	}
      .posts li:hover	{	background:	#ecf0f1;	}
      .list-group-item.active,
      .list-group-item.active:hover,
      .list-group-item.active:focus	{
    	 background-color:	#ecf0f1;
    	 border-color:	#ecf0f1;
    	 color:	#2c3e50;
      }
      `
    ],
    providers: [PostsService, UsersService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent]
})
export class PostsComponent implements OnInit, OnDestroy{
  time: Number;

  posts: any;
  users: any;
  comments: any;
  curPost = '';
  postsLoading = true;
  commentsLoading = true;
  constructor(private _postsService: PostsService, private _usersService: UsersService, private _location: Location){

  }

  ngOnInit(){
  this._postsService.getPosts()
  .subscribe(res => {
    this.posts = res;
  },
  null,
  () => {this.postsLoading = false; }
);

this._usersService.getUsers()
.subscribe(res => {
  this.users = res;
}
);

Observable.interval(1000)
             .map((x) => x+1)
             .subscribe((x) => {
               this.time = x;
             });

}
ngOnDestroy(){
  console.log("Post Component destroyed at: "+this.time+"s");
}

  viewPost(post: any){
    this.curPost = post;
    this._postsService.getComments(post.id)
    .subscribe( res => {
      this.comments = res;
      console.log(res);
    },
    null,
  () => {this.commentsLoading = false; }).unsubscribe();
}
  changeUser(value: any){
    console.log(value);
    this._postsService.getFilteredPosts(value.userId)
    .subscribe( res => {
      this.posts = res;
    })
  }
  back(){
    console.log(this._location)
    this._location.back();
  }
 }
