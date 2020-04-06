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
  
  showModal(buyer): void {

    this.selectedbuyer = buyer
    // this.selectedMax = this.selectedbuyer.limit.maximum;
    // this.selectedMin = this.selectedbuyer.limit.minimum;
    this.is2ndVisible = true;
   // this.formInitializer();
  }

  handleOk(): void {
    
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
    this.resertData();
  }

  handleCancel(): void {
    this.resertData();
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
      this.usdAmount = this.amountSell / this.selectedbuyer.price;
    }
    else {
      this.usdAmount = this.amountSell / this.selectedbuyer.price;
    }
  }

  resertData() {
    this.amountSell = 0;
  }

}