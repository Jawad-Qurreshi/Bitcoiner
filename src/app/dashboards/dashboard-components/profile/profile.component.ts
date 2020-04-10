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
  accountTitle: any;
  IBAN: any;
  country: any;
  postalCode: any;
  state: any;

  radioChangeHandler(event: any) {
    this.selectedRequest = event.target.value;
  }


  tradetype;
  totalUsdAmount;
  price;
  amount;
  walletAddress;
  cryptoTypeTrade;
  descriptionTrade;
  Change;

  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  coinType = '';
  coinTypeSend = '';

  amountReceive;
  amountSend;
  amountTrade;
  addressTo;
  addressFrom;
  addressToSend;
  descriptionSend;

  optionValue;
  optionValue12;

  senderform: FormGroup;
  postTradeData: FormGroup;
  withdrawData: FormGroup;
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
    this.getBitcoin();    
  }

  getBitcoin() {
    this.userService.gettheBIT().subscribe(
      resBitData => {
        this.bitcurrent = resBitData.ticker.BTCUSDT;
        this.getEther();
      },
      err => {
        console.log("api error in getting bitcoin current", err);
      }
    );
  }
  getEther() {
    this.userService.gettheETH().subscribe(
      resEthData => {
        this.ethcurrent = resEthData.ticker.ETHUSDT;
        this.getBuyers();
        this.getSeller();
      },
      err => {
        console.log("api error in getting ethereum current", err);
      }
    );
  }
  getBuyers(){
    this.userService.getallbuyers().subscribe(
      resBuyerData => {
        this.buyers = resBuyerData.result;
        this.buyers.forEach((e) => {

          if (e.cryptoType === 'BTC') {
            const amountradeadded = +e.price;
            const btc = parseFloat(this.bitcurrent);
            e.changeValue = ((amountradeadded / btc) * 100) - 100
          }
          else {
            const amountradeadded = parseFloat(e.price);
            const eth = parseFloat(this.ethcurrent);
            e.changeValue = ((amountradeadded / eth) * 100) - 100
          }
        }
        )
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

  getSeller(){
    this.userService.getallsellers().subscribe(
      resSellerData => {
        this.sellers = resSellerData.result;
        this.sellers.forEach((e) => {

          if (e.cryptoType === 'BTC') {
            const amountradeadded = +e.price;
            const btc = parseFloat(this.bitcurrent);
            e.changeValue = ((amountradeadded / btc) * 100) - 100
          }
          else {
            const amountradeadded = parseFloat(e.price);
            const eth = parseFloat(this.ethcurrent);
            e.changeValue = ((amountradeadded / eth) * 100) - 100
          }
        }
        )
      },
      err => {
        console.log("api error in all Seller", err);
      }
    );
  }

  formInitializer() {
    this.postTradeData = this.fb.group({
      formTradeType: ["", [Validators.required]],
      formCryptoType: ["", [Validators.required]],
      formLimitMax: ["", [Validators.required]],
      formLimitMin: ["", [Validators.required]],
      formdescription: ["", Validators.required],
      formpricePer: ["", Validators.required]

    });
    this.withdrawData = this.fb.group({
      accountTitle: ["", [Validators.required]],
      IBAN: ["", [Validators.required , Validators.maxLength(34) , Validators.minLength(5)]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      postalCode: ["", Validators.required,Validators.maxLength(5),Validators.minLength(5)],
      dateOfExpiry: ["", Validators.required]
    })
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
    if (this.cryptoTypeTrade === 'BTC') {
      const amountradeadded = this.amountTrade;
      const btc = this.bitcurrent;;
      this.Change = ((amountradeadded / btc) * 100) - 100
    }
    else if (this.cryptoTypeTrade === 'ETH') {
      const amountradeadded = this.amountTrade;
      const eth = this.ethcurrent;;
      this.Change = ((amountradeadded / eth) * 100) - 100
    }
    else {
      this.Change = 0
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
        cryptoType: this.cryptoTypeTrade,
        price: this.amountTrade,
        limit: {
          minimum: this.limitMin,
          maximum: this.limitMax
        },
        description: this.descriptionTrade,
        clientId: this.singleclient._id
      }
      this.userService.addOneBuyer(body).subscribe(
        data => {
          this.message.success("Buying request send!");
          this.resetData();
        }, error => {
          this.message.error("Unable to set Buying request");
        }
      )
    }
    else if (this.tradetype === "SELL") {
      if(this.cryptoTypeTrade == "BTC"){
         this.amount = this.limitMax/this.bitcurrent
      }
      else {
        this.amount = this.limitMax/this.ethcurrent
      }
      const body = {
        name: this.singleclient.username,
        cryptoType: this.cryptoTypeTrade,
        price: this.amountTrade,
        limit: {
          minimum: this.limitMin,
          maximum: this.limitMax
        },
        amount: this.amount,
     
        description: this.descriptionTrade,
      }
      this.userService.addOneSeller(body).subscribe(
        data => {
          console.log("got response from server", data);
          this.message.success("Selling request send!");
          this.resetData();
        }, error => {
          this.message.error("Unable to set Selling request");
        }
      )
    }

  }

  withdraw() : void{
    const body ={
      accountTile : this.accountTitle,
      IBAN : this.IBAN,
      country : this.country,
      state : this.state,
      postalCode : this.postalCode 
    }
    this.userService.withdrawRequest(body).subscribe(
      response => {
        this.message.success("Withdraw request Sent")
      },
      err => {
        console.log(err.message)
      }
    )
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
