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
  constructor(private userservice: UserService) {}

  @Input() singleclient: any;

  TotalWallet = 0;
  walletBTC = 0;
  walletETH = 0;
  walletDollars = 0;
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
  }

  updateTotalWallet() {
    //console.log("updateTotalWallet");

    if (this.bitcurrent && this.ethcurrent) {
      this.walletBTC = +this.singleclient.BTC;
      this.walletETH = +this.singleclient.ETH;
      this.walletDollars = +this.singleclient.Dollars;
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
        //console.log("resBitData", resBitData);

        this.bitcurrent = resBitData.ticker.BTCUSDT;
        console.log("API this.bitcurrent", this.bitcurrent);
        this.updateTotalWallet();
      },
      err => {
        console.log("api error in single client", err);
      }
    );

    this.userservice.gettheETH().subscribe(
      resEthData => {
        //console.log("resEthData", resEthData);

        this.ethcurrent = resEthData.ticker.ETHUSDT;
        console.log("API this.ethcurrent", this.ethcurrent);
        this.updateTotalWallet();
        //console.log("Price of ETH: $", this.tickereth);
      },
      err => {
        console.log("api error in single client", err);
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
