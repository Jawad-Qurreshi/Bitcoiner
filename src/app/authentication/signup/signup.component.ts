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

  isVisible = false;
  isOkLoading = false;

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

  showModel(){
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.router.navigate(["/authentication/login"]);
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 100);
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
      username: this.username,
      password : this.password,
      email: this.email,
      phone: this.phone,
      address: this.address
    };

    this.userService.userRegister(body).subscribe(
      data => {
        if(data.isSuccess == false){
          this.message.error("User already exists");
        }else{
          console.log("got response from server", data);
          this.showModel(); 
        }
      },
      error => {
        this.message.error("Unable to Sign up");
      }
    );
    
  }
}
