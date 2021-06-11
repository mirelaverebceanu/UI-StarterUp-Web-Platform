import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  public login(user: User){
    return this.http.post("http://localhost:8080/api/login",user,{responseType:'text' as 'json'});

  }

  public register(){

  }

  public resetPassword(){

  }

  public createProject(){

  }

}
