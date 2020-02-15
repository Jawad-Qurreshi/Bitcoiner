import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../sdk/user.service';
@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html'
})
export class LockComponent {
  clicked: boolean;
  forgotPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: UserService) {}
   
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.forgotPasswordForm = this.formBuilder.group({
       email: [null, [Validators.required, Validators.email]]
    });
  }
  sendpassword(){
    try {
      this.clicked = true;
      const forgotData = this.forgotPasswordForm.value;
      console.log('ForgotPaswordData:', forgotData);
      this.service.userForgotPassword(forgotData).subscribe(
        data => {
          console.log('got response from server', data);
          alert('Password sent! Check your Email');
          this.clicked = false;
        },
        error => {
          console.log('error', error);
          alert('User does not exist! Please sign up first.');
          this.clicked = false;
        }
      );
      } catch (ex) {
          console.log('ex', ex);
        }

  }
}
