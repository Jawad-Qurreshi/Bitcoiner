import { Component, AfterViewInit, OnInit, OnChanges, Input } from '@angular/core';
import * as c3 from 'c3';
import { UserService } from "sdk/user.service";

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit,OnChanges,AfterViewInit {
  constructor(private userservice: UserService) { }

  @Input() singleclient : any;


  TotalWallet : number;
  walletBTC : number;
  walletETH : number;
  walletDollers : number;
  newbitcurrent : number;
  newethcurrent : number;
  bitcurrent : number;
  ethcurrent : number;
  calcwalletBTC : number;
  calcwalletETH : number;
  bit : Number;
  eth : Number;
  //local : string;

 
  
  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 1.5, 1, 0.3], label: 'Cost' }
  ];
  public barChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.3,
        categoryPercentage: 0.7
      }],
      yAxes: [{
        display: false
      }]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: '#16baf0',
      hoverBackgroundColor: '#16baf0',
      hoverBorderWidth: 4,
      hoverBorderColor: '#16baf0'
    }
  ];
  public barChartLegend = false;
  public barChartType = 'bar';


  ngOnChanges(){

    console.log("this.userdata", this.singleclient)
   
    this.walletBTC= +this.singleclient.BTC
    this.walletETH = +this.singleclient.ETH;
    this.walletDollers = +this.singleclient.Dollars;
    

    this.newethcurrent = +this.ethcurrent;
    this.newbitcurrent = +this.bitcurrent;
    

    this.calcwalletBTC = this.walletBTC * this.newbitcurrent;
    this.calcwalletETH = this.walletETH * this.newethcurrent;
    

    this.TotalWallet=this.walletBTC + this.walletETH + this.walletDollers;
    console.log("ywh wala", this.TotalWallet);
  } 
 
  ngOnInit() {
     
    this.userservice.gettheBIT().subscribe(
      resBitData => {
      //console.log("resBitData", resBitData);
      
      this.bitcurrent = resBitData.ticker.BTCUSDT;
      },
      err => {
        console.log("api error in single client", err);
      }
    );

    this.userservice.gettheETH().subscribe(
      resEthData => {
      //console.log("resEthData", resEthData);
     
      this.ethcurrent = resEthData.ticker.ETHUSDT;
      //console.log("Price of ETH: $", this.tickereth);
      },
      err => {
        console.log("api error in single client", err);
      }
    );
    
    
   
  }

   
  // WalletCalc(ethcurrent:number , bitcurrent:number){
    
    
  //   //this.local = localStorage.getItem('ID')
   
    
  // }
 
  ngAfterViewInit() {

    const chart = c3.generate({
      bindto: '#foo',
      data: {
        columns: [['data', 91.4]],
        type: 'gauge'
      },
      gauge: {
        label: {
          format: function (value, ratio) {
            return value;
          },
          show: false
        },
        min: 0,
        max: 100,
        units: ' %',
        width: 15
      },
      legend: {
        hide: true
      },
      size: {
        height: 80
      },
      color: {
        pattern: ['#24d2b5']
      }
    });


  }

 
}
