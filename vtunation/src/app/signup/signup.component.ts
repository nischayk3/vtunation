import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  constructor(private auth: AuthService,
              private router: Router) { }

  model: any = {};

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.auth.registerUser(this.model)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/learning']);
      },
      err => console.log(err)
    )
  }

}
