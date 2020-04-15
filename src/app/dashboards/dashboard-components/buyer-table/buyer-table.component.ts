import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from "@angular/router";

@Component({
  selector: "app-buyer-table",
  templateUrl: "./buyer-table.component.html",
  styleUrls: ['./buyer-table.component.css']
})

export class BuyertableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  usdAmount: any;
  x;

  constructor(private userservice: UserService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router) {

    this.x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }
  buydata: FormGroup;
  @Input() btcAddresses = [];
  buyers = [];
  client

  is2ndVisible = false;
  isOkLoading = false;
  selectedbuyer;
  ethcurrent;
  bitcurrent;
  amountSell;
  selectedMin = 0;
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
    if (!this.client) {
      this.message.error("Please verify yourself in order to avail service")
    } else {
      const body = {
        dollar: this.amountSell,
        id: this.selectedbuyer._id,
        amount: this.usdAmount
      }
      console.log();
      this.userservice.confirmSell(body).subscribe(
        response => {
          
            this.message.success("Transaction Successfull")
            this.ngOnInit();
          
        },
        err => {
          if (err.message === 'TOKEN_INVALID' || err.message === 'TOKEN_NOT_SUPPLIED') {
            this.message.error("Session expired please login")
            this.router.navigate(["authentication/login"]);
          } else if (err.message === 'NOT_ENOUGH_CREDIT_BUYER') {
            this.message.error("This post is not valid anymore")
          } else if (err.message === 'NOT_ENOUGH_CREDIT_SELLER') {
            this.message.error("Not enough credit")
          } 
        }
      )
      this.isOkLoading = true;
      setTimeout(() => {
        this.is2ndVisible = false;
        this.isOkLoading = false;
      }, 100);
      this.resertData();
    }
  }

  handleCancel(): void {
    this.resertData();
    this.is2ndVisible = false;
  }

  getBitcoin() {
    this.userservice.gettheBIT().subscribe(
      resBitData => {
        this.bitcurrent = resBitData.ticker.BTCUSDT;
        this.getEther();
      },
      err => {
        if (err.status === 401)
        localStorage.removeItem("token");
        clearInterval(this.x);
        this.router.navigateByUrl("/authentication/login");
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
        if (err.status === 401)
        localStorage.removeItem("token");
        clearInterval(this.x);
        this.router.navigateByUrl("/authentication/login");
      }
    );
  }
  getBuyers() {
    this.userservice.getallbuyers().subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {
          this.message.error("Session expired please login")
          localStorage.removeItem("token");
          this.router.navigate(["authentication/login"]);
        } else {
          this.buyers = response.result;
          this.getclient();
        }
      },
      err => {
        console.log("api error in all Buyer", err);
      }
    );
  }

  getclient() {
    this.userservice.gettheclient().subscribe(
      response =>{
          this.client = response.isVerified;
        },
      err => {
        if (err.status === 401)
        localStorage.removeItem("token");
        clearInterval(this.x);
        this.router.navigateByUrl("/authentication/login");
      }
    )
  }


  CalcBitEth(): void {
    if (parseFloat(this.amountSell) >= this.selectedbuyer.limit.minimum && parseFloat(this.amountSell) <= this.selectedbuyer.limit.maximum) {
      this.mycolor = false
    }
    else {
      this.mycolor = true;
    }
    if (this.selectedbuyer.cryptoType === 'BTC') {
      const calc = (this.bitcurrent) * (this.selectedbuyer.percentage / 100)
      this.usdAmount = this.amountSell / calc;
    }
    else {
      const calc = (this.ethcurrent) * (this.selectedbuyer.percentage / 100)
      this.usdAmount = this.amountSell / calc;
    }
  }

  resertData() {
    this.amountSell = 0;
  }

}