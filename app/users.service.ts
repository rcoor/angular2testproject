import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core'
import {Users} from './users';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class UsersService {
  private _url = "http://jsonplaceholder.typicode.com";
  constructor(private _http: Http) {

  }

  getUsers() : Observable<Users[]>{
    return this._http.get(this._url+"/users")
    .map(res => res.json());
  }
  getUser(id: string) {
    return this._http.get(this._url+"/users")
    .map(function(res){
      var result = res.json();
      for (var i=0; i < result.length; i++) {
           if (result[i]['id'].toString() === id) {
               return result[i];
           }
       }
    })
  }
  deleteUsers(i: Number) {
    return this._http.delete(this._url+"/posts/"+i)
    .subscribe(res => console.log(res));
  }
  saveUser(form: any) {
    return this._http.post(this._url+"/posts", form);
  }
}
