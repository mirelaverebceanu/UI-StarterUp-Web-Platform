import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
 
@Injectable()
export class JWTTokenService {
 
    jwtToken!: string;
    decodedToken!: { [key: string]: string; };
 
    constructor() {
    }
 
    setToken(token: string) {
      if (token) {
        this.jwtToken = token;
      }
    }
 
    decodeToken() {
      if (this.jwtToken) {
      this.decodedToken = jwtDecode(this.jwtToken);
      }
    }
 
    getDecodeToken() {
      return jwtDecode(this.jwtToken);
    }
 
    getUser() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.displayname : null;
    }
 
    getEmailId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.email : null;
    }
 
}

@Injectable()
export class LocalStorageService {
 
    set(key: string, value: string) {
        localStorage.setItem(key, value);
    }
 
    get(key: string) {
        return localStorage.getItem(key);
    }
 
    remove(key: string) {
        localStorage.removeItem(key);
    }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token'); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `${token}`),
    });

    return next.handle(req1);
  }

}

export class JwtResponse{
    constructor(
      public jwttoken:string,
       ) {}
  
  }