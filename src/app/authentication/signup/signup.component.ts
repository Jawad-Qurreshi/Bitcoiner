import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserService } from "sdk/user.service";
import { id } from "@swimlane/ngx-charts/release/utils";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
  loading = false;
  public clicked = false;
  signupData: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  username;
  password;
  address;
  email;
  phone;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.signupData = this.fb.group({
      Username: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required, Validators.minLength(6)]],
      Confirm: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          this.matchOtherValidator("password")
        ]
      ],
      Phone: ["", Validators.required],
      //DOB: ['', [Validators.required]],
      Address: ["", [Validators.required]],
      checkme: [Validators.required]
    });
  }

  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);
      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }
      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }

  SaveToDB() {
    this.clicked = true;
    this.loading = true;
    
    const body = {
      Username: this.username,
      Password : this.password,
      Email: this.email,
      Phone: this.phone,
      Address: this.address
    };

    this.userService.userRegister(body).subscribe(
      data => {
        if(data.isSuccess == false){
          this.message.error("User already exists");
        }else{
          console.log("got response from server", data);        
          this.router.navigate(["/authentication/login"]);
        }
      },
      error => {
        this.message.error("Unable to Sign up");
      }
    );
    
  }
}
