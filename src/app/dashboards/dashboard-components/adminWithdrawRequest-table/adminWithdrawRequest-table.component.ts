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
  @Input() withdrawRequest = [];

  is2ndVisible = false;
  isOkLoading = false;
  id =localStorage.getItem('ID');

  ngOnInit() {
   
  }

  Approve(request){
    this.selectedRequest = request;
    this.is2ndVisible = true;
  }

  confirm(): void {
    this.isOkLoading = true;
    const id = this.selectedRequest._id;
    this.userservice.approveWithdrawRequest(id).subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
          this.message.success("User Withdraw Request Approved");
        }
        
      },
      error => {
        console.log("error in Approve button "+error);
      }
    );
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.is2ndVisible = false;
  }

}
