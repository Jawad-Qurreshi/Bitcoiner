// import { Component, OnChanges, ViewChild } from "@angular/core";

// import { Input } from "@angular/core";

// declare var require: any;
// const data: any = require("./company.json");

// @Component({
//   selector: "app-seller-table",
//   templateUrl: "./seller-table.component.html",
//   styleUrls: ["./seller-table.css"]
// })
// export class SellertableComponent implements OnChanges {
//   editing = {};
//   rows = [];
//  // temp = [...data];

//   loadingIndicator = true;
//   reorderable = true;

//   columns = [
//     { prop: "Name" },
//     { prop: "Type_of_currency",name:"Type of currency" },
//     { prop: "Price" },
//     { prop: "Change" }   
//   ];

//   

//   @ViewChild(SellertableComponent, { static: false }) table: SellertableComponent;
//   constructor() {
//     this.rows = data;
//   //  this.temp = [...data];
//     setTimeout(() => {
//       this.loadingIndicator = false;
//     }, 1500);
//     console.log(" this.buyers", this.seller);
//   }

//   ngOnChanges() {
//     console.log("onchanges called", this.seller);
//     this.setTableData();
//   }

//   setTableData() {
//     this.rows = this.seller;
//   }

//   updateFilter(event) {
//     const val = event.target.value.toLowerCase();

//     // filter our data
//     const temp = this.seller.filter(function(d) {
//       return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
//     });

//     // update the rows
//     this.rows = temp;
//     // Whenever the filter changes, always go back to the first page
//     this.table = data;
//     //this.setTableData();
//   }
// }

import { Router } from '@angular/router'
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { NzMessageService } from "ng-zorro-antd";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-seller-table",
  templateUrl: "./seller-table.component.html"
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
  amountBuy: any;
  ethcurrent: number;
  mycolor: boolean;
  constructor(
    private userservice: UserService,
    private router:Router,
    private message : NzMessageService,
    private fb: FormBuilder) { }

  @Input() sellers = [];
  @Input() singleclient = [];
  
  CalcBitEth() {
    if ( parseFloat(this.amountBuy)  >= this.selectedseller.limit.minimum && parseFloat(this.amountBuy) <= this.selectedseller.limit.maximum) {
      this.mycolor = false 
      // console.log("this is amountbuy in true condition" + this.amountBuy)
      // console.log("this is amountbuy in true min" + this.selectedseller.limit.minimum)
      // console.log("this is amountbuy in true max" + this.selectedseller.limit.maximum)
    }
    else {
      // console.log("this is amountbuy in false condition" + this.amountBuy)
      // console.log("this is amountbuy in false min" + this.selectedseller.limit.minimum)
      // console.log("this is amountbuy in false max" + this.selectedseller.limit.maximum)
      this.mycolor = true;
    }

    if (this.selectedseller.cryptoType === 'BTC'){
      this.userservice.gettheBIT().subscribe(
        resBitData => {
          this.bitcurrent = resBitData.ticker.BTCUSDT;
        },
        err => {
          this.bitcurrent = 0;
          console.log("api error in getting bitcoin current", err);
        }
      );
      this.usdAmount = this.amountBuy*this.bitcurrent;
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
       this.usdAmount = this.amountBuy*this.ethcurrent;
     }
      this.resertData();
  }

  resertData(){
    this.amountBuy = 0;
  }


  ngOnInit() {
    this.formInitializer();
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
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.resertData();
    this.is2ndVisible = false;
  }


}
