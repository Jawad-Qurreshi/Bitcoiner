import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";

declare var require: any;
const data: any = require("./company.json");

@Component({
  selector: "app-buyer-table",
  templateUrl: "./buyer-table.component.html",
  styleUrls: ["./buyer-table.css"]
})
export class BuyertableComponent implements OnChanges {
  editing = {};
  rows = [];
 // temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "Name" },
    { prop: "Type_of_currency",name:"Type of currency"},
    { prop: "price" },
    { prop: "Change" }   
  ];
  
  @Input() buyer = [];

  @ViewChild(BuyertableComponent, { static: false }) table: BuyertableComponent;
  constructor() {
    this.rows = data;
  //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.buyers", this.buyer);
  }

  ngOnChanges() {
    console.log("onchanges called", this.buyer);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.buyer;
  }
  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.buyer.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }
}
