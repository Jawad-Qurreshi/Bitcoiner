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
  count ;

  constructor(private userservice: UserService) {}

  ngOnChanges() {
    this.userservice.getAddresses().subscribe(
      addresses => {
        //console.log("resallrequest", resallrequest);
      this.btcAddresses = addresses;
      },
      err => {
        console.log("api error in all request retreaval", err);
      }
    );
  }
  
  ngOnInit() {
    this.userservice.getallclients().subscribe(
      resClientData => {
        //console.log("resClientData", resClientData);
        this.clients = resClientData;
      },
      err => {
        console.log("api error in all clients", err);
      }
    );

    this.userservice.getclientcount().subscribe(
      resCountData => {
        //console.log("resClientData", resClientData);
        this.count = resCountData;
      },
      err => {
        console.log("api error in all clients count", err);
      }
    );
    
    this.userservice.getpendingrequests().subscribe(
      resallrequest => {
        this.requests = resallrequest;
      },
      err => {
        console.log("api error in pending request retreaval", err);
      }
    );

    this.userservice.getapprovedrequests().subscribe(
      resallrequest => {
        this.approvedRequests = resallrequest;
      },
      err => {
        console.log("api error in approved request retreaval", err);
      }
    );
    
     this.userservice.getAddresses().subscribe(
       addresses => {
       console.log("all addreses", addresses);
       this.btcAddresses = addresses;
       },
       err => {
         console.log("api error in all request retreaval", err);
       }
     );
  }
}
