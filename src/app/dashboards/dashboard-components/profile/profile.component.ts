import { Component } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  providers: [UserService]
})
export class ProfileComponent {
  
  seller = [];
  buyer = [];

  constructor(private userservice: UserService) {}
  
  ngOnInit() {
    this.userservice.getallsellers().subscribe(
      resSellerData => {
        console.log("resSellerData", resSellerData);
        this.seller = resSellerData;
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userservice.getallbuyers().subscribe(
      resBuyerData => {
        console.log("resSellerData", resBuyerData);
        this.seller = resBuyerData;
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

}
