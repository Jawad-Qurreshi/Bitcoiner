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
  name: any;

  constructor(private userservice: UserService) {}
  
  ngOnInit() {
    this.userservice.getallsellers().subscribe(
      resSellerData => {
        console.log("resSellerData", resSellerData);
        //console.log("Sellersname", resSellerData.Name);
        this.seller = resSellerData;
        console.log ("Sellers name", this.name);
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userservice.getallbuyers().subscribe(
      resBuyerData => {
        console.log("resBuyerData", resBuyerData);
        this.buyer = resBuyerData;
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

}
