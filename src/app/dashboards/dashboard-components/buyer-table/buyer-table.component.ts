import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-buyer-table",
  templateUrl: "./buyer-table.component.html"
})

export class BuyertableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  usdAmount: any;


  constructor(private userservice: UserService, private fb: FormBuilder) { }
  buydata: FormGroup;
  @Input() btcAddresses = [];

  is2ndVisible = false;
  isOkLoading = false;
  selectedbuyer;
  ethcurrent;
  bitcurrent;
  amountSell;
  selectedMin =0 ;
  selectedMax = 0;
  mycolor = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.buydata = this.fb.group({
      usdAmount1: ["", 
      Validators.required,
      // Validators.min(this.selectedMin),
      // Validators.max(this.selectedMax)
    ],
    });
  }
  // SaveToDB(){
  //   this.userservice.postAddresses(this.buydata.value).subscribe(
  //     data => {
  //       console.log("got response from server", data);
  //       // alert("Registeration Successfull!");
  //       // this.loading = false;
  //       console.log('succesfully saved data to db');
  //     },
  //     error => {
  //       console.log("error in save button");
  //     }
  //   );
  // }


  showModal(buyer): void {

    this.selectedbuyer = buyer
    // this.selectedMax = this.selectedbuyer.limit.maximum;
    // this.selectedMin = this.selectedbuyer.limit.minimum;
    this.is2ndVisible = true;
   // this.formInitializer();
  }

  handleOk(): void {
    console.log("this ioss me on " + this.selectedbuyer._id );
    const body = {
      dollar : this.amountSell,
      id : this.selectedbuyer._id,
      amount : this.usdAmount
    }
    console.log();
    this.userservice.confirmSell(body).subscribe(
      response => {
           console.log("transaction done" + response.message);
      },
      err => {
        console.log("transaction not done" + err.message);
      }
    )
    this.isOkLoading = true;
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.resertData;
    this.is2ndVisible = false;
  }

  @Input() buyers = [];

  CalcBitEth(): void {
    if (parseFloat(this.amountSell) >= this.selectedbuyer.limit.minimum && parseFloat(this.amountSell) <= this.selectedbuyer.limit.maximum) {
      this.mycolor = false
    }
    else {
      this.mycolor = true;
    }
    if (this.selectedbuyer.cryptoType === 'BTC') {
      // this.userservice.gettheBIT().subscribe(
      //   resBitData => {
      //     this.bitcurrent = resBitData.ticker.BTCUSDT;
      //   },
      //   err => {
      //     this.bitcurrent = 0;
      //     console.log("api error in getting bitcoin current", err);
      //   }
      // );
      this.usdAmount = this.amountSell / this.selectedbuyer.price;
    }
    else {
      // this.userservice.gettheETH().subscribe(
      //   resEthData => {
      //     this.ethcurrent = resEthData.ticker.ETHUSDT;
      //   },
      //   err => {
      //     this.ethcurrent = 0;
      //     console.log("api error in getting ethereum current", err);
      //   }
      // );
      this.usdAmount = this.amountSell / this.selectedbuyer.price;
    }
  }

  resertData() {
    this.amountSell = 0;
  }

}