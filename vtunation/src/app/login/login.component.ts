import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.auth.loginUser(this.model)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/learning']);
      },
      err => console.log(err)
    )
  }

}
