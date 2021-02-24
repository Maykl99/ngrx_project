import { Observable } from 'rxjs';
/* import { User } from './../classes/User'; */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  flatS = 'http://localhost:8000/api/flats/';
  loginUrl = 'http://localhost:8000/api/login';
  registerUrl = 'http://localhost:8000/api/register';
  logoutUrl = 'http://localhost:8000/api/logout';

  constructor(
    private http: HttpClient
  ) {}

  flats(): Observable<any>
  {
    return this.http.get(this.flatS);
  }

  login(credentials): Observable<any>
  {
    return this.http.post(this.loginUrl, credentials);
  }

  register(credentials): Observable<any>
  {
    return this.http.post(this.registerUrl, credentials);
  }

  logout(): Observable<any>
  {
    return this.http.get(this.logoutUrl);
  }

}
