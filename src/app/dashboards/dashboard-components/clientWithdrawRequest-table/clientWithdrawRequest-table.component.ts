import { NzMessageService } from "ng-zorro-antd";
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from "@angular/router"

@Component({
  selector: "app-ClientWithdrawrequest-table",
  templateUrl: './clientWithdrawRequest-table.component.html',
  styleUrls: ['./clientWithdrawRequest-table.component.css']
})

export class ClientWithdrawRequesttableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  selectedRequest: any;
  x;
  constructor(
    private message: NzMessageService,
    private userservice: UserService, 
    private router : Router
    ) {
      this.x = setInterval(() => {
        this.ngOnInit();
      }, 10 * 1000);
    }
  
  requests = [];

  id =localStorage.getItem('ID');

  ngOnChanges(){
    this.getRequests();
  }
  ngOnInit() {
   this.getRequests();
  }

  getRequests() : void{
    this.userservice.getclientWithdrawRequest().subscribe(
      response => {
        this.requests = response.requests 
      },
      err => {
        if(err.status === 401 )
        this.message.error("Session expired please login again")
          localStorage.removeItem("token");
          clearInterval(this.x);
          this.router.navigateByUrl("/authentication/login");
      }
    )
  }

}