import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private registerUrl = 'api/register';
  private loginUrl = 'api/login';
  private sendmail = 'api/sendmail';
  private sendmails = 'api/sendmails';

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
