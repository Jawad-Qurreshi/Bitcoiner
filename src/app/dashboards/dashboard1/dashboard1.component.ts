import { Component, OnInit } from "@angular/core";

import { UserService } from "sdk/user.service";

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
  providers: [UserService]
})
export class Dashboard1Component implements OnInit {
  clients = [];
  requests = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getallclients().subscribe(
      resClientData => {
        console.log("resClientData", resClientData);
        this.clients = resClientData;
      },
      err => {
        console.log("api error in all clients", err);
      }
    );
    
    this.userservice.getallrequests().subscribe(
      resallrequest => {
        console.log("resallrequest", resallrequest);
        this.requests = resallrequest;
      },
      err => {
        console.log("api error in all request retreaval", err);
      }
    );
    
  }
}
