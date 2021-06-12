import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthBody } from './authbody';
import { Project } from './project';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  public login(auth: AuthBody){
    return this.http.post("http://localhost:8080/api/login",auth,{responseType:'text' as 'json'});

  }

  public register(user: User){
    return this.http.post("http://localhost:8080/api/register",user,{responseType:'text' as 'json'});
  }

  public resetPassword(){

  }

  public createProject(project: Project){
    return this.http.post("http://localhost:8080/api/projects/create", project, {responseType:'text' as 'json'});
  }

}
