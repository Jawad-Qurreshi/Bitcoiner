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
  //singleclient = [];

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

  
}
