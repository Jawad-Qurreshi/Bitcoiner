import { Component, OnInit, OnChanges } from "@angular/core";

import { UserService } from "sdk/user.service";

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
  providers: [UserService]
})
export class Dashboard1Component implements OnInit, OnChanges {
  clients = [];
  requests = [];
  approvedRequests = [];
  btcAddresses = [];
  withdrawRequest = [];
 
  count ;

  constructor(private userservice: UserService) {}

  ngOnChanges() {
    this.generateData();
  }
  
  generateData(){
    
    this.userservice.getAdminWithdrawRequest().subscribe(
      response => {
       this.withdrawRequest = response.requests;
       console.log("withdraw request"+ this.withdrawRequest )
      },
      err => {
        console.log("api error in all request retreaval", err);
      }
    )
    this.userservice.getAddresses().subscribe(
      addresses => {
      this.btcAddresses = addresses;
      },
      err => {
        console.log("api error in all request retreaval", err);
      }

    );
    this.userservice.getallclients().subscribe(
      resClientData => {
        this.clients = resClientData;
      },
      err => {
        console.log("api error in all clients", err);
      }
    );

    this.userservice.getpendingrequests().subscribe(
      resallrequest => {
        this.requests = resallrequest.requests;
      },
      err => {
        console.log("api error in pending request retreaval", err);
      }
    );

    this.userservice.getapprovedrequests().subscribe(
      resallrequest => {
        this.approvedRequests = resallrequest.requests;
      },
      err => {
        console.log("api error in approved request retreaval", err);
      }
    );
    
     this.userservice.getAddresses().subscribe(
       addresses => {
       this.btcAddresses = addresses;
       },
       err => {
         console.log("api error in all request retreaval", err);
       }
     );
  }

  ngOnInit() {
    this.generateData();
  }
}
