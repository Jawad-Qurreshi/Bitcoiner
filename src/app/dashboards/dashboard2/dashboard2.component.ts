import { Component, AfterViewInit } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
  providers: [UserService]
})
export class Dashboard2Component implements AfterViewInit {
  
  singleclient = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    var id =localStorage.getItem('ID');
    //console.log("id from localstorage", id);
    this.userservice.gettheclient(id).subscribe(
      resClientData => {
       // console.log("resClientData", resClientData);
        this.singleclient = resClientData;
        //console.log('this is client after using id' , this.singleclient);
      },
      err => {
        console.log("api error in single client", err);
      }
    );
  }
  ngAfterViewInit() {}
}
