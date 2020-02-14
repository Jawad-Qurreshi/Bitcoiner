// import { Component, OnChanges, ViewChild } from "@angular/core";

// import { Input } from "@angular/core";

// declare var require: any;
// const data: any = require("./company.json");

// @Component({
//   selector: "app-buyer-table",
//   templateUrl: "./buyer-table.component.html",
//   styleUrls: ["./buyer-table.css"]
// })
// export class BuyertableComponent implements OnChanges {
//   editing = {};
//   rows = [];
//  // temp = [...data];

//   loadingIndicator = true;
//   reorderable = true;

//   columns = [
//     { prop: "Name" },
//     { prop: "Type_of_currency",name:"Type of currency"},
//     { prop: "Price" },
//     { prop: "Change" }   
//   ];
  
//   @Input() buyer = [];

//   @ViewChild(BuyertableComponent, { static: false }) table: BuyertableComponent;
//   constructor() {
//     this.rows = data;
//   //  this.temp = [...data];
//     setTimeout(() => {
//       this.loadingIndicator = false;
//     }, 1500);
//     console.log(" this.buyers", this.buyer);
//   }

//   ngOnChanges() {
//     console.log("onchanges called", this.buyer);
//     this.setTableData();
//   }

//   setTableData() {
//     this.rows = this.buyer;
//   }
  
//   updateFilter(event) {
//     const val = event.target.value.toLowerCase();

//     // filter our data
//     const temp = this.buyer.filter(function(d) {
//       return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
//     });

//     // update the rows
//     this.rows = temp;
//     // Whenever the filter changes, always go back to the first page
//     this.table = data;
//     //this.setTableData();
//   }
// }


import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-buyer-table",
  templateUrl: "./buyer-table.component.html"
})

export class BuyertableComponent {

  
  constructor(private userservice: UserService, private fb: FormBuilder) {}
  buydata: FormGroup;
  @Input() btcAddresses = [];

  is2ndVisible = false;
  isOkLoading = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.buydata = this.fb.group({
      AddressBTC: ["", Validators.required],
      AddressETH: ["", Validators.required],
    });
  }
  // SaveToDB(){
  //   this.userservice.postAddresses(this.buydata.value).subscribe(
  //     data => {
  //       console.log("got response from server", data);
  //       // alert("Registeration Successfull!");
  //       // this.loading = false;
  //       console.log('succesfully saved data to db');
  //     },
  //     error => {
  //       console.log("error in save button");
  //     }
  //   );
  // }
  
  
  showModal(): void {
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
    this.is2ndVisible = false;
  }

  @Input() buyers = [];
name = this.buyers;

}