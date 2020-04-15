import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: "app-buyer-table",
  templateUrl: "./buyer-table.component.html",
  styleUrls: ['./buyer-table.component.css']
})

export class BuyertableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  usdAmount: any;


  constructor(private userservice: UserService, private fb: FormBuilder,private message : NzMessageService) { 
    
    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }
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
    this.getBitcoin()
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
  //  this.formInitializer();
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
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
         this.message.success("Transaction Successfull")
         this.ngOnInit();
        }
      },
      err => {
        this.message.error("Transaction not successfull")
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

  buyers = [];

  getBitcoin() {
    this.userservice.gettheBIT().subscribe(
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
    this.userservice.gettheETH().subscribe(
      resEthData => {
        this.ethcurrent = resEthData.ticker.ETHUSDT;
        this.getBuyers();
        // this.getSeller();
      },
      err => {
        console.log("api error in getting ethereum current", err);
      }
    );
  }
  getBuyers() {
    this.userservice.getallbuyers().subscribe(
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