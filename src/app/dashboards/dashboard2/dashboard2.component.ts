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
  constructor(private userservice: UserService) {

    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  ngOnInit() {
    var id =localStorage.getItem('ID');
    //console.log("id from localstorage", id);
    this.userservice.gettheclient(id).subscribe(
      resClientData => {
        this.singleclient = resClientData;
        //console.log('this is client after using id' , this.singleclient);
      },
      err => {
        console.log("api error in single client", err);
      }
    );

    // this.userservice.getallrequests().subscribe(
    //   resallrequest => {
    //    // console.log("resallrequest", resallrequest);
    //     this.requests = resallrequest;
    //   },
    //   err => {
    //     console.log("api error in all request retreaval", err);
    //   }
    // );

     this.userservice.getmypendingrequest(id).subscribe(
       response => {
         if(response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED'){
          
         }else{
          this.myPendingRequests = response.requests;
         }
       },
       err => {
        console.log("api error in my request retreaval", err);
       } 
     );

     this.userservice.getmyapprovedrequest(id).subscribe(
      getmyappreq => {
       this. myApprovedRequests  = getmyappreq.requests;
      },
      err => {
       console.log("api error in my request retreaval", err);
      } 
    );
  }
  ngAfterViewInit() {}
}
