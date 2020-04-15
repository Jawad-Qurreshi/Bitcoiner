import { Component, AfterViewInit } from '@angular/core';
import { UserService } from "sdk/user.service";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";


@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
  providers: [UserService]
})
export class Dashboard2Component implements AfterViewInit {

  x;
  singleclient = [];
  myPendingRequests = [];
  myApprovedRequests = [];
  records = [];
  constructor(
    private userservice: UserService,
    private router : Router,
    private message : NzMessageService) {

    this.x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  ngOnInit() {
    this.userservice.gettheclient().subscribe(
      response => {
          this.singleclient = response;
      },
      err => {
        if(err.status === 401 )
        this.message.error("Session expired please login again")
          localStorage.removeItem("token");
          clearInterval(this.x);
          this.router.navigateByUrl("/authentication/login");
      }
    );

    this.userservice.getmypendingrequest().subscribe(
      response => {
          this.myPendingRequests = response.requests;
      },
      err => {
        console.log("api error in my request retreaval", err);
      }
    );

    this.userservice.getmyapprovedrequest().subscribe(
      response => {
          this.myApprovedRequests = response.requests;
      },
      err => {
        console.log("api error in my request retreaval", err);
      }
    );

    this.userservice.getSummery().subscribe(
      response => {
          this.records = response.posts;
        err => {
          console.log("error in api" + err)
        }
      }
    )
  }
  ngAfterViewInit() { }
}
