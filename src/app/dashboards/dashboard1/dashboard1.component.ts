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

  constructor(private userservice: UserService) {
    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  ngOnChanges() {
    this.generateData();
  }
  
  generateData(){
    
    this.userservice.getAdminWithdrawRequest().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
       this.withdrawRequest = response.requests;
        }
      },
      err => {
        console.log("api error in all request retreaval", err);
      }
    )
    this.userservice.getAddresses().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
      this.btcAddresses = response;
        }
      },
      err => {
        console.log("api error in all request retreaval", err);
      }

    );
    this.userservice.getallclients().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
        this.clients = response;
        }
      },
      err => {
        console.log("api error in all clients", err);
      }
    );

    this.userservice.getpendingrequests().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
        this.requests = response.requests;
        }
      },
      err => {
        console.log("api error in pending request retreaval", err);
      }
    );

    this.userservice.getapprovedrequests().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
        this.approvedRequests = response.requests;
        }
      },
      err => {
        console.log("api error in approved request retreaval", err);
      }
    );
    
     this.userservice.getAddresses().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
       this.btcAddresses = response;
        }
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
