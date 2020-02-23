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
  selectedRequest: String = '';
  buyerdata : any = [];
  types: any =[
    'Buy',
    'Sell'
  ];

  radioChangeHandler (event: any){
    this.selectedRequest = event.target.value;
  }

  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  optionValue;
  optionValue1;
  optionValue12;
  price;
  senderform: FormGroup;

  

  sellers = [];
  buyers = [];
  name: any;
  
  @Input() singleclient = [];
  ethcurrent: any;
  bitcurrent: any;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService, 
    private router: Router) {
  }

  ngOnChanges(){

    if(this.selectedRequest === 'Buy'){
      
      // this.userService.userRegister(this.buyerdata.values).subscribe(
      //   data => {
      //     console.log("got response from server", data);
      //     // alert("Registeration Successfull!");
      //     // this.loading = false;
      //     this.message.success("Buyer saving Successful");
      //   },
      //   error => {
      //     this.message.error("Buyer failed to do so");
      //   }
      // );

      console.log('my data')
    }

    else if(this.selectedRequest === 'Sell'){
      console.log('your data')
    }
  
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

  
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
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
    this.userService.gettheBIT().subscribe(
      resBitData => {
        //console.log("resBitData", resBitData);

        this.bitcurrent = resBitData.ticker.BTCUSDT;
        //console.log("API this.ethcurrent", this.bitcurrent);
      },
      err => {
        console.log("api error in getting bitcoin current", err);
      }
    );

    this.userService.gettheETH().subscribe(
      resEthData => {
        //console.log("resEthData", resEthData);

        this.ethcurrent = resEthData.ticker.ETHUSDT;
        //console.log("API this.ethcurrent", this.ethcurrent);
        //console.log("Price of ETH: $", this.tickereth);
      },
      err => {
        console.log("api error in getting ethereum current", err);
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
