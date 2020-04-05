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
  adminForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private message: NzMessageService,
    private router: Router
  
  ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.adminForm = this.formBuilder.group({
      username: ["",Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  login() :void {
    this.clicked = true;
      const loginData = this.adminForm.value;
       this.userservice.adminLogin(loginData).subscribe(
         response=>{
           localStorage.setItem("token",response.token)
          this.message.success("Login Successful");
          this.clicked = false;
          this.router.navigate(["dashboard/dashboard1"]);
         },
         err => {
          this.message.success("Invalid Username or password");
          this.clicked = false;
         }
       )
  }
}
