import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const api = 'https://api.github.com/users/'

@Injectable()
export class GitService {

  constructor(private _http: Http) { }

  getScore(user, cb){
    this._http.get(api + user).subscribe(
      (res) =>{
        cb(res.json())
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
