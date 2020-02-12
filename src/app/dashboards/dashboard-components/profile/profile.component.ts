import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";
import { UserService } from "sdk/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html",
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  senderform: FormGroup;

  sellers = [];
  buyers = [];
  name: any;
  
  @Input() singleclient = [];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService, 
    private router: Router) {
  }

  logout() {
    localStorage.removeItem("ID");
    localStorage.removeItem("token");
    this.router.navigateByUrl("/authentication/login");
  }

  showModal(): void {
    this.isVisible = true;
  }
  showmModal(): void {
    this.is2ndVisible = true;
  }

  handlesenderOk(): void {
    // var id =localStorage.getItem('ID');
    // this.userService.sendrequest(id,this.senderform.value).subscribe(
    //   data => {
    //     console.log("got response from server", data);
    //     // alert("Registeration Successfull!");
    //     // this.loading = false;
    //     this.message.success("Payment succeded");

    //     this.router.navigate(["/authentication/login"]);
    //   },
    //   error => {
    //     // this.clicked = false;
    //     // this.loading = false;
    //     // console.log("error in save button");
    //      this.message.error("Unable to pay");
    //   }
    // );
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handlereceiverOk(): void {

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
   // this.formInitializer();

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

    this.userService.getallsellers().subscribe(
      resSellerData => {
        this.sellers = resSellerData;
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userService.getallbuyers().subscribe(
      resBuyerData => {
        this.buyers = resBuyerData;
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

  // formInitializer() {
  //   this.senderform = this.fb.group({
  //     currencyselection: ["", Validators.required],
  //     walletAddress: ["", [Validators.required]],
  //     currencyBTC: ["", [Validators.required]],
  //     currencyUSD: [""],
  //     //DOB: ['', [Validators.required]],
  //     descriptionselection: [""]
  //   });
  // }
}
