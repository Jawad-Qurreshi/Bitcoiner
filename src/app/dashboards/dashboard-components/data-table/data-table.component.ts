import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";

declare var require: any;
const data: any = require("./company.json");
@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.css"]
})
export class DatatableComponent implements OnChanges {
  editing = {};
  rows = [];
 // temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "username" , name:"Username" },
    { prop: "email" },
    { prop: "address" },
    { prop: "phone" },
    { prop: "btc" },
    { prop: "eth" },
    { prop: "dollar" }
  ];
  @Input() clients = [];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor() {
    this.rows = data;
  //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.clients", this.clients);
  }

  ngOnChanges() {
    console.log("onchanges called", this.clients);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.clients;
  }
  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.clients.filter(function(d) {
      return d.Email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }


}
