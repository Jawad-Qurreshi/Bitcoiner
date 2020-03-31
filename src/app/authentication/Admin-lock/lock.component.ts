import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../sdk/user.service';
import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-lock',
  templateUrl: './lock.component.html'
})
export class AdminLockComponent {
  clicked: boolean;
  adminPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: UserService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.adminPasswordForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.email]]
    });
  }
  login() :void {
    //try {
      this.message.success("Login Successful");
      this.clicked = false;
      this.router.navigate(["dashboard/dashboard1"]);
    //   this.clicked = true;
    //   const password = this.adminPasswordForm.value;
    //   this.service.adminLoginPassword(password).subscribe(
    //     data => {
    //       this.message.success("Login Successful");
    //       this.clicked = false;
    //       this.router.navigate(["dashboard/dashboard1"]);
    //     },
    //     error => {
    //       console.log('error', error);
    //       this.message.success("Login Unsuccessful");
    //       this.clicked = false;
    //     }
    //   );
    // } catch (ex) {
    //   console.log('ex', ex);
    // }

  }
}
