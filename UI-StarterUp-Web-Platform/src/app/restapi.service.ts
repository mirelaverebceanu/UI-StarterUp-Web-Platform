import { HttpClient, HttpEvent, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthBody } from './authbody';
import { Project } from './project';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  parsedJsonFromLogin: any;
  public token: any;
  headers: any;

  constructor(private http:HttpClient) { }

  public login(auth: AuthBody){
    let rsp = this.http.post("http://localhost:8080/api/login",auth,{responseType:'text' as 'json'});
    rsp.subscribe(data=>{
      this.parsedJsonFromLogin = JSON.stringify(data);
      console.log(this.parsedJsonFromLogin);
      const token = this.parsedJsonFromLogin.split(":")[2].split("\\")[1].substring(1);
      console.log(token);
    })
    this.headers = new HttpHeaders().set("Authorization", this.token);
    return rsp;
  }
  // public createAuthHeader(headers: Headers){
  //   headers.append("Authorization", this.token);
  // }

  public register(user: User){
    return this.http.post("http://localhost:8080/api/register",user,{responseType:'text' as 'json'});
  }

  public resetPassword(){

  }

  public createProject(project: Project){
    return this.http.post("http://localhost:8080/api/projects/create", project,  {responseType:'text' as 'json', 'headers': this.headers});
  }

  // public getUser(auth: AuthBody){
  //   return this.http.get("http://localhost:8080/api/users/show/{email}", auth.email, )
  // }

  public uploadFile(file: File){
    let id = this.http.get("http://localhost:8080/api/users/show/auth");
    return this.http.put("http://localhost:8080/api/users/updateAvatar/${id}", file, {'headers': this.headers});
  }

}
