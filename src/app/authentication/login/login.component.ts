import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'sdk/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  clicked: boolean;
  loading: boolean;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: UserService) { }

  loginform = true;
  recoverform = false;
  loginForm: FormGroup;
  recoveryForm: FormGroup;



  login() {
    this.clicked = true;
    try {
    const loginData = this.loginForm.value;
    console.log('loginData', loginData);
    this.service.userLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        localStorage.setItem('token', 'mytoken');
        localStorage.setItem('email', loginData.Email);
        //this.loading = false;

         this.router.navigate(['dashboards/dashboard2']);
      },
      error => {
        this.clicked = false;
        this.loading = false;
        console.log('error', error);
        alert('Wrong email or password!');
      }
    );
    } catch (ex) {
        console.log('ex', ex);
      }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.clicked = false;
    this.formInitializer();
  }
  

  formInitializer() {
    this.loginForm = this.formBuilder.group({
       Email: [null, [Validators.required, Validators.email]],
       Password: [null, [Validators.required]]


    });
    this.recoveryForm = this.formBuilder.group({
      recoveryemail: [null, [Validators.required, Validators.email]],
      resetpassword: [null, [Validators.required]]
   });
  }
  
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
  


