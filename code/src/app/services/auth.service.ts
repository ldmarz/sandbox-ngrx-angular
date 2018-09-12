import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from '../constants';
import { LoginFormInterface } from '../interfaces/login-form';
import { LoginResponse } from '../interfaces/login-response';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}

  login(params: LoginFormInterface) {
    return this.http.post(URL_SERVER + 'auth/login', params)
      .pipe(map((user: LoginResponse) => {
        if (user && user.access_token) {
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('userName', user.user.name);
        }
        return user;
      }
    ));
  }

  clearStorage() {
    localStorage.setItem('token', '');
    localStorage.setItem('userName', '');
  }
}
