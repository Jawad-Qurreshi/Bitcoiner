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
  amountWithdraw: any;
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
  //Change;

  isVisible = false;
  is2ndVisible = false;
  isOkLoading = false;

  coinType = '';
  coinTypeSend = '';

  copyaddress = '';
  amountReceive;
  amountSend;
  amountTrade;
  addressTo;
  addressFrom;
  addressToSend;
  descriptionSend;

  cryptoExchange;
  usdExchange

  optionValue;
  optionValue12;

  senderform: FormGroup;
  postTradeData: FormGroup;
  withdrawData: FormGroup;
  exchangeData: FormGroup;
  usdAmount = 0;
  name: any;
  @Input() singleclient;
  ethcurrent: any;
  bitcurrent: any;
  saveReceivedLoading = false;
  saveSendLoading = false;
  cryptoExchangeSelect


  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit() {
    this.formInitializer();
    this.getCrypto();
  }

  getCrypto() {
    this.userService.gettheBIT().subscribe(
      response => {
        this.bitcurrent = response.ticker.BTCUSDT;
        this.getEther();
      },
      err => {
        console.log(err)
      }
    )
  }

  getEther() {
    this.userService.gettheETH().subscribe(
      response => {
        this.ethcurrent = response.ticker.ETHUSDT;
      },
      err => {
        console.log(err)
      }
    )
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
      IBAN: ["", [Validators.required, Validators.maxLength(34), Validators.minLength(5)]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      postalCode: ["", [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      amountWithdraw: ["", [Validators.required, Validators.min(20)]]
    })

    // this.exchangeData = this.fb.group({
    //   cryptoExchange: ["", [Validators.required]],
    //   usdExchange: ["",[Validators.required]]
    // ]
    // })
  }

  logout() {
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
  // amountChangedtrade() {
  //   this.amountTradeCalc();
  // }
  // amountTradeCalc() {
  //   if (this.cryptoTypeTrade === 'BTC') {
  //     const amountradeadded = this.amountTrade;
  //     const btc = this.bitcurrent;;
  //     const num = ((amountradeadded / btc) * 100) - 100
  //     this.Change = num.toFixed(2);
  //   }
  //   else if (this.cryptoTypeTrade === 'ETH') {
  //     const amountradeadded = this.amountTrade;
  //     const eth = this.ethcurrent;;
  //     const num = ((amountradeadded / eth) * 100) - 100
  //     this.Change = num.toFixed(2);
  //   }
  //   else {
  //     this.Change = 0
  //   }
  // }
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
    if (!this.singleclient.isVerified) {
      this.message.error("Please verify yourself in order send currency");
      this.isVisible = false;
      this.resetData();
      this.saveSendLoading = false;
    } else {
      this.saveSendLoading = true;
      let receiverAddress;
      if (this.coinTypeSend === 'BTC') {
        receiverAddress = this.singleclient.btcAddress;
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
  }


  confirm(): void {
    if (!this.singleclient.isVerified) {
      this.message.error("Please verify yourself in order to buy or sell");
      this.resetData();
    } else {
      if (this.tradetype === "BUY") {
        3
        const body = {
          cryptoType: this.cryptoTypeTrade,
          percentage: this.amountTrade,
          limit: {
            minimum: this.limitMin,
            maximum: this.limitMax
          },
          description: this.descriptionTrade,
          clientId: this.singleclient._id,
          amount: this.amountTrade
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
        const body = {
          name: this.singleclient.username,
          cryptoType: this.cryptoTypeTrade,
          price: this.amountTrade,
          limit: {
            minimum: this.limitMin,
            maximum: this.limitMax
          },
          //amount: this.amount;
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
  }
  withdraw(): void {
    const body = {
      accountTitle: this.accountTitle,
      iban: this.IBAN,
      country: this.country,
      state: this.state,
      postalCode: this.postalCode,
      amount: this.amountWithdraw
    }
    this.userService.postWithdrawRequest(body).subscribe(
      response => {
        this.message.success("Withdraw request Sent")
        this.resetData()
      },
      err => {
        console.log(err.message)
        this.resetData()
      }

    )
  }

  copyText(): void {
    var copyaddress = document.getElementById("walletAddress") as HTMLInputElement;
    copyaddress.select();
    copyaddress.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyaddress);
  }

  exchangeCalc() {
    const crypto = this.cryptoExchange;
    console.log("This is "+this.cryptoExchangeSelect)
    if (this.cryptoExchangeSelect === "btc") {
      this.usdExchange = crypto * this.bitcurrent;
    } else {
      this.usdExchange = crypto * this.ethcurrent;
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
    this.accountTitle = '',
      this.IBAN = '',
      this.country = '',
      this.state = '',
      this.postalCode = '',
      this.amountWithdraw = ''
    // this.cryptoTypeTrade = '';
    // this.amountTrade = 0;
    // this.quantityTrade = 0;
    // this.descriptionTrade='';
    // this.Change = 0;
    // this.totalUsdAmount = 0;
    this.ngOnInit();
  }
}
