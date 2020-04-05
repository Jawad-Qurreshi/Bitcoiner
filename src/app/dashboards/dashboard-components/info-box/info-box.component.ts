import * as c3 from "c3";

import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit
} from "@angular/core";

import { UserService } from "sdk/user.service";

@Component({
  selector: "app-info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.css"]
})
export class InfoBoxComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(private userservice: UserService) {
    const x = setInterval(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }

  @Input() singleclient: any;

  TotalWallet = 0;
  reserveTotalWallet = 0;
  availableBalance = 0;
  
  walletBTC = 0;
  walletETH = 0;
  walletDollars = 0;
  
  reservewalletBTC = 0;
  reservewalletETH = 0;
  reservewalletDollars = 0;
  
  reservecalcwalletBTC = 0;
  reservecalcwalletETH = 0;

  newbitcurrent = 0;
  newethcurrent = 0;
  bitcurrent = 0;
  ethcurrent = 0;
  calcwalletBTC = 0;
  calcwalletETH = 0;
  bit = 0;
  eth = 0;

  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 1.5, 1, 0.3], label: "Cost" }
  ];
  public barChartLabels: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [
        {
          display: false,
          barPercentage: 0.3,
          categoryPercentage: 0.7
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: "#16baf0",
      hoverBackgroundColor: "#16baf0",
      hoverBorderWidth: 4,
      hoverBorderColor: "#16baf0"
    }
  ];
  public barChartLegend = false;
  public barChartType = "bar";

  ngOnChanges() {
    //console.log("this.userdata", this.singleclient);
    this.updateTotalWallet();
    this.updateTotalReserveWallet();
    this. calculatedAvailableBalance();
  }
  
  calculatedAvailableBalance(){
    this.availableBalance = this.TotalWallet -this.reserveTotalWallet ;
  }
  updateTotalReserveWallet() {
    if (this.bitcurrent && this.ethcurrent) {
      this.reservewalletBTC = +this.singleclient.reservedBtc;
      this.reservewalletETH = +this.singleclient.reservedEth;
      this.reservewalletDollars = +this.singleclient.reservedDollar;
      this.newethcurrent = +this.ethcurrent;
      this.newbitcurrent = +this.bitcurrent;
      this.reservecalcwalletBTC = this.reservewalletBTC * this.newbitcurrent;
      this.reservecalcwalletETH = this.reservewalletETH * this.newethcurrent;
      this.reserveTotalWallet = this.reservecalcwalletBTC + this.reservecalcwalletETH + this.reservewalletDollars; 
    }
  }

  updateTotalWallet() {
    if (this.bitcurrent && this.ethcurrent) {
      this.walletBTC = +this.singleclient.btc;
      this.walletETH = +this.singleclient.eth;
      this.walletDollars = +this.singleclient.dollar;
      this.newethcurrent = +this.ethcurrent;
      this.newbitcurrent = +this.bitcurrent;
      this.calcwalletBTC = this.walletBTC * this.newbitcurrent;
      this.calcwalletETH = this.walletETH * this.newethcurrent;
      this.TotalWallet = this.calcwalletBTC + this.calcwalletETH + this.walletDollars;
    }
  }
  ngOnInit() {
    this.userservice.gettheBIT().subscribe(
      resBitData => {
        this.bitcurrent = resBitData.ticker.BTCUSDT;
        this.updateTotalWallet();
        this.updateTotalReserveWallet();
        this.calculatedAvailableBalance();
      },
      err => {
        console.log("api error in getting bitcoin current", err);
      }
    );

    this.userservice.gettheETH().subscribe(
      resEthData => {
        this.ethcurrent = resEthData.ticker.ETHUSDT;
        this.updateTotalWallet();
        this.updateTotalReserveWallet();
        this.calculatedAvailableBalance();
      },
      err => {
        console.log("api error in getting ethereum current", err);
      }
    );
  }

 

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: "#foo",
      data: {
        columns: [["data", 91.4]],
        type: "gauge"
      },
      gauge: {
        label: {
          format: function(value, ratio) {
            return value;
          },
          show: false
        },
        min: 0,
        max: 100,
        units: " %",
        width: 15
      },
      legend: {
        hide: true
      },
      size: {
        height: 80
      },
      color: {
        pattern: ["#24d2b5"]
      }
    });
  }
}
