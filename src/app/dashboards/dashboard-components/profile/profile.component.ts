import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  providers: [UserService]
})
export class ProfileComponent implements OnInit,OnChanges{
  
  sellers = [];
  buyers = [];
  name: any;
  //singleclient = [];

  @Input() singleclient = [];
  router: any;

  constructor(private userservice: UserService) {
    
  }
  
  logout(){
    localStorage.removeItem('ID');
    localStorage.removeItem('token');
    this.router.navigateByUrl('../../starter');
  }

  ngOnChanges(){

    //console.log("this.userdata", this.singleclient);
  } 


  ngOnInit() {
    
    // var id =localStorage.getItem('ID');
    // //console.log("id from localstorage", id);
    // this.userservice.gettheclient(id).subscribe(
    //   resClientData => {
    //   console.log("resClientData", resClientData);
    //   this.singleclient = resClientData;
    //   console.log('this is client after using id' , this.singleclient);
    //   },
    //   err => {
    //     console.log("api error in single client", err);
    //   }
    // );
    //console.log("client in profile", this.singleclient);

    this.userservice.getallsellers().subscribe(
      resSellerData => {
        this.sellers = resSellerData;
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userservice.getallbuyers().subscribe(
      resBuyerData => {
        this.buyers = resBuyerData;
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

}
