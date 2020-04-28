import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';
  private sendmail = 'http://localhost:3000/api/sendmail';
  private sendmails = 'http://localhost:3000/api/sendmails';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  sendEmail(data: any) {
    return this.http.post<any>(this.sendmail, data);
  }
  sendEmails(data: any) {
    return this.http.post<any>(this.sendmails, data);
  }
}
