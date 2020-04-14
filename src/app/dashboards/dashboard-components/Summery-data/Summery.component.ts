import { Component, OnChanges, ViewChild, TemplateRef } from "@angular/core";
import { Input } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";

declare var require: any;
const data: any = require("./company.json");
@Component({
  selector: "app-summery-table",
  templateUrl: "./Summery.component.html",
  styleUrls: ["./Summery.scss"]
})
export class SummeryTableComponent implements OnChanges {
  editing = {};
  @ViewChild('editTmpl', { static: false }) editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;

  rows = [];

  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  columns = [
    { prop: "cryptoType", name: "Currency" },
    { prop: "price", name: "Price" },
    { prop: "amount", name: "Amount traded" },
    { prop: "postType", name: "Type" },
    { prop: "createdAt", name: "Posted at" },
    { prop: "concludedAt", name: "Concluded" },
    
  ];
  @Input() records = [];
  @ViewChild(SummeryTableComponent, { static: false }) table: SummeryTableComponent;
  constructor() {
    this.rows = data;
    //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  ngOnChanges() {
    this.setTableData();
  }

  setTableData() {
    this.rows = this.records;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.records.filter(function (d) {
      return d.createdAt.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table = data;
    
  }


  ngOnInit() {
  }



}
