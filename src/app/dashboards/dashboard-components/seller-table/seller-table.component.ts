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
      this.resertData();
  }

  resertData(){
    this.amountBuy = 0;
    //this.usdAmount = 0;
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
    const body = {
      dollar : this.amountBuy,
      id : this.selectedseller._id,
      amount : this.usdAmount
    }
    this.userservice.confirmBuy(body).subscribe(
      response => {
        this.message.success(response.message)
      },
      err => {
        console.log(err.message)
      }
    )
    this.resertData();
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
