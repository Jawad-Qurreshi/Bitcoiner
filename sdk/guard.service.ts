import { CanActivate, Router } from '@angular/router';
import { NzMessageService } from "ng-zorro-antd";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GuardService  {

  constructor(private router: Router, private message: NzMessageService,) { }

  canActivate() {
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (token) {
      return true;
    } else {
      this.router.navigate(['authentication/login']);
      this.presentAlertConfirm();
    }
  }
  async presentAlertConfirm() {
    this.message.error("Please Login first");
   }
}
