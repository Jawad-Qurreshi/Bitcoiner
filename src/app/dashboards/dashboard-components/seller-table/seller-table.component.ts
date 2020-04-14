import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { NzMessageService } from "ng-zorro-antd";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-seller-table",
  templateUrl: "./seller-table.component.html",
  styleUrls: ['./seller-table.component.css']
})

export class SellertableComponent {
  public config: PerfectScrollbarConfigInterface = {};

  loading = false;
  public clicked = false;
  selldata: FormGroup;
  is2ndVisible = false;
  isOkLoading = false;
  selectedseller: any;
  bitcurrent: any;
  usdAmount: number;
  priceSell;
  amountBuy
  ethcurrent: number;
  mycolor: boolean;
  constructor(
    private userservice: UserService,
    private router:Router,
    private message : NzMessageService,
    private fb: FormBuilder) {

      const x = setInterval(() => {
        this.ngOnInit();
      }, 10 * 1000);
     }

  sellers = [];
  @Input() singleclient = [];
  
  CalcBitEth() {
    if ( parseFloat(this.amountBuy)  >= this.selectedseller.limit.minimum && parseFloat(this.amountBuy) <= this.selectedseller.limit.maximum) {
      this.mycolor = false 
    }
    else {
      this.mycolor = true;
    }
    if (this.selectedseller.cryptoType === 'BTC'){
      this.usdAmount = this.amountBuy / +this.selectedseller.price;
     }
     else {
       this.usdAmount = this.amountBuy / +this.selectedseller.price;
     }
      
  }

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
        this.getSeller();
      },
      err => {
        console.log("api error in getting ethereum current", err);
      }
    );
  }

  getSeller() {
    this.userservice.getallsellers().subscribe(
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
            const eth = +this.ethcurrent;
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

  resetData(){
    this.amountBuy = 0;
    this.usdAmount = 0;
  }


  ngOnInit() {
    this.formInitializer();
    this.getBitcoin()
  }

  formInitializer() {
    this.selldata = this.fb.group({
      usdAmount1: ["", Validators.required],
    });
  }

  
  showModal(seller): void {
    this.selectedseller = seller;
    this.is2ndVisible = true;
    
  }

  handleOk(): void {
    this.isOkLoading = true;
    console.log("this is MOUNT BUY" + this.amountBuy)
    const body = {
      dollar : this.amountBuy,
      id : this.selectedseller._id,
      amount : this.usdAmount
    }
    this.userservice.confirmBuy(body).subscribe(
      response => {
        this.ngOnInit();
        this.message.success(response.message)
      },
      err => {
        console.log(err.message)
      }
    )
    this.resetData();
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.resetData();
    this.is2ndVisible = false;
  }


}
