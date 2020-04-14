import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: "app-buySell-table",
  templateUrl: "./buySell-table.component.html",
  styleUrls: ['./buySell-table.component.css']
})

export class BuySelltableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  clientid
  selectedOne: any;
  deleteID: this;

  constructor(private userservice: UserService, private message: NzMessageService) {

    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  buyerSellers = [];
  btcCurrent
  ethCurrent


  is2ndVisible = false;
  isOkLoading = false;

  ngOnInit() {
    this.getCrypto();

  }

  getCrypto() {
    this.userservice.gettheBIT().subscribe(
      response => {
        this.btcCurrent = response.ticker.BTCUSDT;
        this.getEther();
      },
      err => {
        console.log(err)
      }
    )
  }

  getEther() {
    this.userservice.gettheETH().subscribe(
      response => {
        this.ethCurrent = response.ticker.ETHUSDT;
        this.getBuyerSeller();
      },
      err => {
        console.log(err)
      }
    )
  }

  getBuyerSeller() {
    this.userservice.getBuyerSeller().subscribe(
      response => {
        this.buyerSellers = response.posts;
        this.buyerSellers.forEach((e) => {

          if (e.cryptoType === 'BTC') {
            const amountradeadded = +e.price;
            const btc = parseFloat(this.btcCurrent);
            e.changeValue = ((amountradeadded / btc) * 100) - 100
          }
          else {
            const amountradeadded = parseFloat(e.price);
            const eth = parseFloat(this.ethCurrent);
            e.changeValue = ((amountradeadded / eth) * 100) - 100
          }
        }
        )
      
      },
      err => {
        console.log(err.message);
      }
    )
  }
  showModal(buyerSeller): void {
    this.selectedOne = buyerSeller;
    this.is2ndVisible = true;
  }
  handleOk(): void {
    const deleteID = this.selectedOne._id;
    this.userservice.deletebuySell(deleteID).subscribe(
      response => {
        this.message.success("Your request successfully deleted")
        this.ngOnInit();
      },
      err => {
        console.log(err.response)
      }
    )

    this.isOkLoading = true;
    setTimeout(() => {
      this.is2ndVisible = false;
      this.isOkLoading = false;
    }, 100);
  }
  handleCancel(): void {
    this.is2ndVisible = false;
  }

}