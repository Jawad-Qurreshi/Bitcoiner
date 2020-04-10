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
  @Input() requests = [];

  is2ndVisible = false;
  isOkLoading = false;
  id =localStorage.getItem('ID');

  ngOnInit() {
   this.getRequests();
  }

  // Approve(request){
  //   this.selectedRequest = request;
  //  ;
  // }

  // showModel(){
  //   this.is2ndVisible = true;
  // }

  getRequests() : void{
    // this.userservice.updateRequestApproved(request._id).subscribe(
    //   data => {
    //     console.log("got response from server", data);
    //     this.message.success("User Request Approved");
    //   },
    //   error => {
    //     console.log("error in Approve button button");
    //   }
    // );
  }

}