import { Component, OnChanges, ViewChild, TemplateRef } from "@angular/core";
import { UserService } from "sdk/user.service"
import { NzMessageService } from "ng-zorro-antd";
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
  // temp = [...data];

  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  columns = [
    { prop: "username", name: "Username" },
    { prop: "email", name: "Email" },
    { prop: "address", name: "Address" },
    { prop: "phone", name: "Phone" },
    { prop: "btc", name: "Bitcoin" },
    { prop: "eth", name: "Ethereum" },
    { prop: "dollar", name: "Dollar" },
  ];
  @Input() clients = [];
  @ViewChild(SummeryTableComponent, { static: false }) table: SummeryTableComponent;
  constructor(
    private userservice: UserService,
    private message: NzMessageService
  ) {
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
    this.rows = this.clients;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.clients.filter(function (d) {
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }

  // onSelectRed(row) {
  //   const id = row._id;
  //   this.userservice.verifyclient(id).subscribe(
  //     response => {
  //        this.message.success("Client verified Successfully");
  //     },
  //     err => {
  //       this.message.error("Server error please try again later");
  //        console.log(err);
  //     }
  //   )

  // }

  ngOnInit() {

    // this.userservice.verifyclient(id).subscribe(
    //   response => {
    //     this.message.success("Client verified Successfully");
    //   },
    //   err => {
    //     this.message.error("Server error please try again later");
    //     console.log(err);
    //   }
    // )


  }



}
