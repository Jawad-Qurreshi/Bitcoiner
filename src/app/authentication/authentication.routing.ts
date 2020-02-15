import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { SignupComponent } from './signup/signup.component';
//import { Signup2Component } from './signup2/signup2.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },  
      {
        path: 'Lock',
        component: LockComponent
      },  
    ]
  }
];
