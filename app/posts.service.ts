import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core'
import {Users} from './users';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class PostsService {
  private _url = "http://jsonplaceholder.typicode.com";
  constructor(private _http: Http) {
  }

  getPosts(){
    return this._http.get(this._url+"/posts")
    .map(res => res.json());
  }
  getFilteredPosts(userId: number){
    return this._http.get(this._url+"/posts?userId="+userId)
    .map(res => res.json());
  }
  getComments(id: number){
    return this._http.get(this._url+"/posts/"+id+"/comments")
    .map(res => res.json());
  }
}
