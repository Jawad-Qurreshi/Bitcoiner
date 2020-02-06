import { Component, Input, Output } from '@angular/core';
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
  singleclient = [];

  //@Input() singleclient = [];

  constructor(private userservice: UserService) {
    
  }
  
  ngOnInit() {
    
    var id =localStorage.getItem('ID');
    //console.log("id from localstorage", id);
    this.userservice.gettheclient(id).subscribe(
      resClientData => {
      console.log("resClientData", resClientData);
      this.singleclient = resClientData;
      console.log('this is client after using id' , this.singleclient);
      },
      err => {
        console.log("api error in single client", err);
      }
    );
    //console.log("client in profile", this.singleclient);

    this.userservice.getallsellers().subscribe(
      resSellerData => {
        this.seller = resSellerData;
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userservice.getallbuyers().subscribe(
      resBuyerData => {
        this.buyer = resBuyerData;
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

}
