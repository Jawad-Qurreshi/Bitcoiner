import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  providers: [UserService]
})
export class ProfileComponent implements OnInit,OnChanges{
  
  isVisible = false;
is2ndVisible = false;
  isOkLoading = false;

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
  
  showModal(): void {
    this.isVisible = true;
  }
  showmModal(): void {
    this.is2ndVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.is2ndVisible = false;
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
