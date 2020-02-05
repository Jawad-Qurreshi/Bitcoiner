import { Component, AfterViewInit } from '@angular/core';

//import { UserService } from "sdk/user.service";
@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
  //providers: [UserService]
})
export class Dashboard2Component implements AfterViewInit {
 // seller = [];

  constructor() {}

  // ngOnInit() {
  //   this.userservice.getallclients().subscribe(
  //     resSellerData => {
  //       console.log("resSellerData", resSellerData);
  //       this.seller = resSellerData;
  //     },
  //     err => {
  //       console.log("api error in all Seller", err);
  //     }
  //   );
  // }
  ngAfterViewInit() {}
}
