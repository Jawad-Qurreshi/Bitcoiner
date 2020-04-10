import { NzMessageService } from "ng-zorro-antd";
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-AdminWithdrawrequest-table",
  templateUrl: './adminWithdrawRequest-table.component.html',
  styleUrls: ['./adminWithdrawRequest-table.component.css']
})

export class AdminWithdrawRequesttableComponent {
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
   
  }

  Approve(request){
    this.selectedRequest = request;
    this.is2ndVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    // this.userservice.updateRequestApproved(request._id).subscribe(
    //   data => {
    //     console.log("got response from server", data);
    //     this.message.success("User Request Approved");
    //   },
    //   error => {
    //     console.log("error in Approve button button");
    //   }
    // );
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.is2ndVisible = false;
  }

}
