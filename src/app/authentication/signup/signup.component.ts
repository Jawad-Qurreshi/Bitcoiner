import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'sdk/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent {
  loading = false;
  public clicked = false;
  signupData: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}
  
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.signupData = this.fb.group({
      Username: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.matchOtherValidator('password')
        ]
      ],
      Phone: ['', Validators.required],
      //DOB: ['', [Validators.required]],
      Address: ['', [Validators.required]],
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
    this.userService.userRegister(this.signupData.value).subscribe(
      data => {
        console.log('got response from server', data);
       alert('Registeration Successfull!');
       // this.loading = false;
       this.router.navigate(['/login']);
      },
      error => {
        this.clicked = false;
        this.loading = false;
        console.log('error in save button');
        alert('Registeration Failed! User Already Exists');
      }
    );
  }


}
