import { CanActivate, Router } from '@angular/router';
import { NzMessageService } from "ng-zorro-antd";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GuardServiceAdmin  {

  constructor(private router: Router, private message: NzMessageService,) { }

  canActivate() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['authentication/Admin']);
      this.presentAlertConfirm();
    }
  }
  async presentAlertConfirm() {
    this.message.error("Please Login first");
   }
}
