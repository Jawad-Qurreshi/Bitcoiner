import { NzMessageService } from "ng-zorro-antd";
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-ClientWithdrawrequest-table",
  templateUrl: './clientWithdrawRequest-table.component.html',
  styleUrls: ['./clientWithdrawRequest-table.component.css']
})

export class ClientWithdrawRequesttableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  selectedRequest: any;
  constructor(
    private message: NzMessageService,
    private userservice: UserService, 
    ) {}
  
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
         console.log("Error while retriving client withdraw request");
      }
    )
  }

}