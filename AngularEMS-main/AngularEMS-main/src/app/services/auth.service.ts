import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/login-dto';
import { Role } from '../models/role';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //http://localhost:4200/api/auth
  private apiUrl = environment.apiBaseUrl + 'auth';

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  
  constructor(private client:HttpClient) { }

  register(user: User): Observable<User> {
    user.role = Role.employee;
    return this.client.post<User>(this.apiUrl, user, this.httpOptions);
  }

  login(user: User): Observable<LoginDto> {
    //http://localhost:4200/api/auth/login
    
    let login = this.client.post<LoginDto>(`${this.apiUrl}/login`, user, this.httpOptions);
    login.subscribe(result => {
      localStorage.setItem('userInfo', JSON.stringify(result));
    }, err => {
      return null;
    })
    return login;
  }

  getUser(): LoginDto {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }

  isUserLoggedIn(): boolean {
    if(localStorage.getItem('userInfo') == null) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('userInfo');
  }
}
