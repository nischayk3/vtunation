import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService) { }
  model: any = {};

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(this.model);
    console.log(this.model.firstName);
    const user = {
      name: this.model.firstName,
      email: this.model.email
    };
    this.auth.sendEmail(this.model).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Message Sent');
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} Thankyou for contacting`
        );
      },
      err => console.log(err)
    );
    form.resetForm();
  }

}
