import { AuthenticationRoutes } from "./authentication.routing";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NotfoundComponent } from "./404/not-found.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import {  LockComponent } from './lock/lock.component';
import { AdminLockComponent } from './Admin-lock/lock.component'

//import { Signup2Component } from './signup2/signup2.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    NgZorroAntdModule
  ],
  declarations: [NotfoundComponent,
    AdminLockComponent, 
    LockComponent,
    LoginComponent,
     SignupComponent]
})
export class AuthenticationModule {}

