import { Component, AfterViewInit } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
  providers: [UserService]
})
export class Dashboard2Component implements AfterViewInit {

  singleclient = [];
  myPendingRequests = [];
  myApprovedRequests = [];
  records = [];
  constructor(private userservice: UserService) {

    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  ngOnInit() {
    var id = localStorage.getItem('ID');
    //console.log("id from localstorage", id);
    this.userservice.gettheclient(id).subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
          this.singleclient = response;
        }
      },
      err => {
        console.log("api error in single client", err);
      }
    );

    this.userservice.getmypendingrequest(id).subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
          this.myPendingRequests = response.requests;
        }
      },
      err => {
        console.log("api error in my request retreaval", err);
      }
    );

    this.userservice.getmyapprovedrequest(id).subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
          this.myApprovedRequests = response.requests;
        }
      },
      err => {
        console.log("api error in my request retreaval", err);
      }
    );

    this.userservice.getSummery().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
          this.records = response.posts;
        }
        err => {
          console.log("error in api" + err)
        }
      }
    )
  }
  ngAfterViewInit() { }
}
