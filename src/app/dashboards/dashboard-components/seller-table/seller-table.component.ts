import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";

declare var require: any;
const data: any = require("./company.json");

@Component({
  selector: "app-seller-table",
  templateUrl: "./seller-table.component.html",
  styleUrls: ["./seller-table.css"]
})
export class SellertableComponent implements OnChanges {
  editing = {};
  rows = [];
 // temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "Name" },
    { prop: "Type_of_currency",name:"Type of currency" },
    { prop: "Price" },
    { prop: "Change" }   
  ];
  
  @Input() seller = [];

  @ViewChild(SellertableComponent, { static: false }) table: SellertableComponent;
  constructor() {
    this.rows = data;
  //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.buyers", this.seller);
  }

  ngOnChanges() {
    console.log("onchanges called", this.seller);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.seller;
  }
  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.seller.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }
}
