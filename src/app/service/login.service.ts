import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  authenticate(username: string, password: string) {
    const data = {'email': username, 'password': password};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.post<any>('https://pacific-caverns-84912.herokuapp.com/api/login', data, config);

  }
  login() {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+ localStorage.getItem('token')) };
    console.log(config.headers);
    return this.http.get<any>('https://pacific-caverns-84912.herokuapp.com/api/profile', config);
  }
  logout() {
    localStorage.clear(); 
  }

}

