import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";

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
  coinType ;
  amount = 0.0;
  optionValue;
  //optionValue1;
  optionValue12;
  price;
  senderform: FormGroup;
  usdAmount = 0;
  sellers = [];
  buyers = [];
  name: any;
  finalAddress;
  @Input() singleclient;
  ethcurrent: any;
  bitcurrent: any;
  saveReceivedLoading = false;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService,
    private router: Router
  ) {}
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
  amountChanged() {
    this.calculateUsdAmount();
  }

  currencyChanged() {
    this.currencyAddress();
  }

  currencyAddress(){
    if (this.coinType === "BTC") {
      this.finalAddress = this.singleclient.BitAddress;
    } else if (this.coinType === "ETH") {
      this.finalAddress = this.singleclient.EthAddress;
    } else {
      this.message.error("Please select currency");
    }
  }

  calculateUsdAmount() {
    //console.log("singleclient", this.singleclient);
    if (isNaN(this.amount)) {
      this.usdAmount = 0;
    } else {
      console.log("cointype", this.coinType);
      if (this.coinType === "BTC") {
        this.usdAmount = this.amount * this.bitcurrent;
        this.finalAddress = this.singleclient.BitAddress;
      } else if (this.coinType === "ETH") {
        this.usdAmount = this.amount * this.ethcurrent;
        this.finalAddress = this.singleclient.EthAddress;
      }
    }
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

  saveReceieved(): void {
    this.saveReceivedLoading = true;
    const body2 ={
      Username : this.singleclient.Username,
      Email : this.singleclient.Email,
      Phone : this.singleclient.Phone,
      Address : this.singleclient.Address,
      Status : "under process",
      TypeOfRequest :"Receive",
      BTC : this.singleclient.BTC,
      ETC : this.singleclient.ETC,
      Dollars : this.singleclient.Dollars
    }
    const body = {
      status: "under process",
      request_type : "Receive",
      crypto_type: this.coinType,
      amount: this.amount,
      date: Date.now(),
      usd_amount: this.usdAmount,
      address: this.finalAddress,
      client: this.singleclient._id
    };

    this.userService.requestToReceive(body2).subscribe(
      data => {
        console.log("got response from server", data);

        // this.message.success("Payment receiving request sent!");
        // this.is2ndVisible = false;
        this.resetData();
        // this.router.navigate(["/authentication/login"]);
      },
      error => {
        this.saveReceivedLoading = false;
        this.is2ndVisible = false;
        this.message.error("Unable to pay");
      }
    );

    this.userService.receiveCoins(body).subscribe(
      data => {
        console.log("got response from server", data);

        this.message.success("Payment receiving request sent!");
        this.is2ndVisible = false;
        this.resetData();
        // this.router.navigate(["/authentication/login"]);
      },
      error => {
        this.saveReceivedLoading = false;
        this.is2ndVisible = false;
        this.message.error("Unable to pay");
      }
    );
  }

  resetData() {
    this.amount = 0;
  }
}
