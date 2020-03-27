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
  buyerdata: any = [];
  types: any = [
    'Buy',
    'Sell'
  ];

  radioChangeHandler(event: any) {
    this.selectedRequest = event.target.value;
  }

  quantityTrade;
  tradetype;
  totalUsdAmount;


  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  coinType = 'BTC';
  coinTypeSend =  'ETH';
  coinTypetrade;

  amountReceive = 0.0;
  amountSend = 0.0;
  amountTrade = 0.0;
  addressTo;
  addressFrom ;
  addressToSend;
  descriptionSend;

  optionValue;
  //optionValue1;
  optionValue12;
  price;
  senderform: FormGroup;
  usdAmount = 0;
  sellers = [];
  buyers = [];
  name: any;
  @Input() singleclient;
  ethcurrent: any;
  bitcurrent: any;
  saveReceivedLoading = false;
  saveSendLoading = false;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService,
    private router: Router
  ) { }
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

  showSendModal(): void {
    this.isVisible = true;
    this.is2ndVisible = false;
  }
  showRecieveModal(): void {
    this.isVisible = false;
    this.is2ndVisible = true;
  }

  amountChangedSend() {
    this.calculateUsdAmountSend();
  }

  amountChanged() {
    this.calculateUsdAmountReceive();
  }

  currencyChanged() {
    this.currencyAddress();
  }

  amountChangedtrade() {
    this.amountTradeCalc();
  }

  amountTradeCalc() {
    if (isNaN(this.amountTrade)) {
      this.usdAmount = 0;
    } else {
      console.log("cointypeTrade", this.coinType);
      if (this.coinType === "BTC") {
        this.totalUsdAmount = this.amountTrade * this.quantityTrade;
      } else if (this.coinType === "ETH") {
        this.totalUsdAmount = this.amountTrade * this.ethcurrent;
      }
    }
  }

  currencyAddress() {
    if (this.coinType === "BTC") {
      this.addressTo = this.singleclient.btcAddress;
    } else if (this.coinType === "ETH") {
      this.addressTo = this.singleclient.ethAddress;
    } else {
      this.message.error("Please select currency");
    }
  }

  calculateUsdAmountReceive() {
    //console.log("singleclient", this.singleclient);
    if (isNaN(this.amountReceive)) {
      this.usdAmount = 0;
    } else {
      console.log("cointypeReceived", this.coinType);
      if (this.coinType === "BTC") {
        this.usdAmount = this.amountReceive * this.bitcurrent;
      } else if (this.coinType === "ETH") {
        this.usdAmount = this.amountReceive * this.ethcurrent;
      }
    }
  }

  calculateUsdAmountSend() {
    //console.log("singleclient", this.singleclient);
    if (isNaN(this.amountSend)) {
      this.usdAmount = 0;
    } else {
      console.log("coinTypeSend", this.coinTypeSend);
      if (this.coinTypeSend === "BTC") {

        this.usdAmount = this.amountSend * this.bitcurrent;
      } else if (this.coinTypeSend === "ETH") {
        console.log("cointype ETH send i was called");
        this.usdAmount = this.amountSend * this.ethcurrent;
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
      this.saveReceivedLoading = false;
    }, 3000);
  }

  handlereceiverOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.is2ndVisible = false;
      this.isOkLoading = false;
      this.saveReceivedLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.is2ndVisible = false;
  }

  saveReceieved(): void {

    this.saveReceivedLoading = true;
    console.log("this is receiving side", this.addressFrom);
    const body = {
      username: this.singleclient.username,
      email: this.singleclient.email,
      to: this.addressTo,
      from: this.addressFrom,
      requestType: "Receive",
      cryptoType: this.coinType,
      amount: this.amountReceive,
    }


    this.userService.addToRequest(body).subscribe(
      data => {
        console.log("got response from server", data);
        this.message.success("Payment receiving request sent!");
        this.is2ndVisible = false;
        this.resetData();
      },
      error => {
        this.saveReceivedLoading = false;
        this.is2ndVisible = false;
        this.message.error("Unable to pay");
      }
    );
    this.handlereceiverOk()
  }

  saveSend(): void {

    this.saveSendLoading = true;
    let receiverAddress;
    if (this.coinTypeSend === 'BTC'){
        receiverAddress = this.singleclient.btcAddress;
        console.log('this is btc add from' + receiverAddress);
    }else if (this.coinTypeSend === 'ETH'){
        receiverAddress = this.singleclient.ethAddress;
        
    }
    const body = {
      username: this.singleclient.username,
      email: this.singleclient.email,
      to: this.addressToSend,
      from: receiverAddress,
      requestType: "Send",
      cryptoType: this.coinTypeSend,
      amount: this.amountSend,
      description: this.descriptionSend
    }
   // console.log('this is eth bodyyyy from' + body);


    this.userService.addToRequest(body).subscribe(
      data => {
        console.log("got response from server", data);
        this.message.success("Payment Sending request sent!");
        this.isVisible = false;
        this.resetData();
        this.saveSendLoading = false;
      },
      error => {
        this.saveSendLoading = false;
        this.isVisible = false;
        this.message.error("Unable to pay");
      }
    );
    this.handlesenderOk()
  }



  confirm(): void {
    if (this.tradetype === "BUY") {
      const body = {
        Username: this.singleclient.Username,
        Email: this.singleclient.Email,
        Phone: this.singleclient.Phone,
        Address: this.singleclient.Address,
        Status: "under process",
        TypeOfCurrency: this.coinType,
        TypeOfRequest: "BUY",
        BTC: this.singleclient.BTC,
        ETC: this.singleclient.ETC,
        Dollars: this.singleclient.Dollars
      }
    }
    else if (this.tradetype === "SELL") {
      const body = {
        Username: this.singleclient.Username,
        Email: this.singleclient.Email,
        Phone: this.singleclient.Phone,
        Address: this.singleclient.Address,
        Status: "under process",
        TypeOfCurrency: this.coinType,
        TypeOfRequest: "Sell",
        BTC: this.singleclient.BTC,
        ETC: this.singleclient.ETC,
        Dollars: this.singleclient.Dollars
      }

    }

  }

  resetData() {
    this.amountReceive = 0;
    this.amountSend = 0;
    this.coinType = '';
    this.coinTypeSend = '';
    this.addressToSend = '';
    this.addressTo = '';
    this.addressFrom = '' ;
  }
}
