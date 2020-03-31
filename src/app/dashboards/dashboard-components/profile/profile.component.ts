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
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  selectedRequest: String = '';
  buyerdata: any = [];
  types: any = [
    'Buy',
    'Sell'
  ];
  limitMin: any;
  limitMax: any;

  radioChangeHandler(event: any) {
    this.selectedRequest = event.target.value;
  }

  
  tradetype;
  totalUsdAmount;
  price;
  walletAddress;
  cryptoTypeTrade;
  descriptionTrade;
  Change;

  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  coinType = '';
  coinTypeSend = '';

  amountReceive ;
  amountSend ;
  amountTrade ;
  addressTo;
  addressFrom;
  addressToSend;
  descriptionSend;

  optionValue;
  optionValue12;

  senderform: FormGroup;
  postTradeData: FormGroup;
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
    this.formInitializer();

    this.userService.getallsellers().subscribe(
      resSellerData => {
        this.sellers = resSellerData.result;
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );

    this.userService.getallbuyers().subscribe(
      resBuyerData => {
        this.buyers = resBuyerData.result;
        console.log("this is me buyer", this.buyers);
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

  formInitializer() {
    this.postTradeData = this.fb.group({
    formTradeType: [ "" ,[Validators.required]],
    formCryptoType: ["" ,[Validators.required]],
      formLimitMax: ["", [Validators.required]],
      formLimitMin: ["", [Validators.required]],
      formdescription: ["", Validators.required],
      formpricePer: ["", Validators.required]

    });
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
    this.amountChanged();
  }

  amountChangedtrade() {
    this.amountTradeCalc();
  }

  amountTradeCalc() {
    
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
    this.resetData();
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
        console.log(error.message);
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
    if (this.coinTypeSend === 'BTC') {
      receiverAddress = this.singleclient.btcAddress;
      console.log('this is btc add from' + receiverAddress);
    } else if (this.coinTypeSend === 'ETH') {
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
        name: this.singleclient.username,
        email: this.singleclient.email,
        cryptoType: this.cryptoTypeTrade,
        price: this.amountTrade,
        limit:{
          minimum:this.limitMin,
          maximum:this.limitMax
        },
        //walletAddress: receiverAddress,
        description: this.descriptionTrade,
        clientId: this.singleclient._id
      }
      
      this.userService.addOneBuyer(body).subscribe(
        data => {
          this.message.success("Buying request send!");
          this.resetData();
        },error => {
          this.message.error("Unable to set Buying request");
        }
      )
    }
    else if (this.tradetype === "SELL") {
      const body = {
        name: this.singleclient.username,
        cryptoType: this.cryptoTypeTrade,
        price: this.amountTrade,
        limit:{
          minimum:this.limitMin,
          maximum:this.limitMax
        },
        email: this.singleclient.email,
        description: this.descriptionTrade,
        clientId: this.singleclient._id
      }
      
      this.userService.addOneSeller(body).subscribe(
        data => {
          console.log("got response from server", data);
          this.message.success("Selling request send!");
          this.resetData();
        },error => {
          this.message.error("Unable to set Selling request");
        }
      )
    }

  }

  resetData() {
    this.usdAmount = 0;
    this.amountReceive = 0;
    this.amountSend = 0;
    this.coinType = '';
    this.coinTypeSend = '';
    this.addressToSend = '';
    this.addressTo = '';
    this.addressFrom = '';
    // this.cryptoTypeTrade = '';
    // this.amountTrade = 0;
    // this.quantityTrade = 0;
    // this.descriptionTrade='';
    // this.Change = 0;
    // this.totalUsdAmount = 0;
    this.ngOnInit();
  }
}
