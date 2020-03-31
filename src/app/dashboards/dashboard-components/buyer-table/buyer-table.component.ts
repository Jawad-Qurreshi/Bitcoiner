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
  amountSell: any;
  mycolor: boolean;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.buydata = this.fb.group({
      usdAmount1: ["", Validators.required],
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
    this.is2ndVisible = true;
  }

  handleOk(): void {
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
    if (this.usdAmount >= this.selectedbuyer.limit.minimum || this.usdAmount <= this.selectedbuyer.limit.minimum) {
      this.mycolor=false;
      if (this.selectedbuyer.cryptoType === 'BTC') {
        this.userservice.gettheBIT().subscribe(
          resBitData => {
            this.bitcurrent = resBitData.ticker.BTCUSDT;
          },
          err => {
            this.bitcurrent = 0;
            console.log("api error in getting bitcoin current", err);
          }
        );
        this.usdAmount = this.amountSell * this.bitcurrent;
      }
      else {
        this.userservice.gettheETH().subscribe(
          resEthData => {
            this.ethcurrent = resEthData.ticker.ETHUSDT;
          },
          err => {
            this.ethcurrent = 0;
            console.log("api error in getting ethereum current", err);
          }
        );
        this.usdAmount = this.amountSell * this.ethcurrent;
      }
      this.resertData();
    }
    else {
      this.mycolor = true;
    }

  }

  resertData() {
    this.amountSell = 0;
  }

}