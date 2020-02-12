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

@Component({
  selector: "app-seller-table",
  templateUrl: "./seller-table.component.html"
})

export class SellertableComponent {

  loading = false;
  public clicked = false;

  constructor(
    private userservice: UserService,
    private router:Router,
    private message : NzMessageService) { }

  @Input() sellers = [];
  @Input() singleclient = [];
  
  sellitem() {
    this.clicked = true;
    this.loading = true;

    console.log('my value:' , this.singleclient )

    // this.userservice.userRegister(this.signupData.value).subscribe(
    //   data => {
    //     console.log("got response from server", data);
    //     // alert("Registeration Successfull!");
    //     // this.loading = false;
    //     this.message.success("Signup Successful");

    //     this.router.navigate(["/authentication/login"]);
    //   },
    //   error => {
    //     this.clicked = false;
    //     this.loading = false;
    //     console.log("error in save button");
    //     this.message.error("Registeration Failed! User Already Exists");
    //   }
    // );
  }
}
