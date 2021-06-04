import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  public login(userName:string, password:string){
    return this.http.get("http://localhost:8080/");

  }
}
