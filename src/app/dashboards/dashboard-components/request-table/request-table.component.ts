// import { Component, OnChanges, ViewChild } from "@angular/core";

// import { Input } from "@angular/core";

// declare var require: any;
// const data: any = require("./company.json");

// @Component({
//   selector: "app-request-table",
//   templateUrl: "./request-table.component.html",
//   styleUrls: ["./request-table.css"]
// })
// export class RequesttableComponent implements OnChanges {
//   editing = {};
//   rows = [];
//  // temp = [...data];

//   loadingIndicator = true;
//   reorderable = true;

//   columns = [
//     { prop: "Username" },
//     { prop: "Email" },
//     { prop: "Phone" },
//     { prop: "Address" },
//     { prop: "Status" },
//     { prop: "Type Of Request" },
//     { prop: "BTC" },
//     { prop: "ETC" },
//     { prop: "Dollars" },
//     { prop: "Action" },
    
//   ];
//   @Input() requests = [];
//   @ViewChild(RequesttableComponent, { static: false }) table: RequesttableComponent;
//   constructor() {
//     this.rows = data;
//   //  this.temp = [...data];
//     setTimeout(() => {
//       this.loadingIndicator = false;
//     }, 1500);
//     console.log(" this.requests", this.requests);
//   }

//   ngOnChanges() {
//     console.log("onchanges called", this.requests);
//     this.setTableData();
//   }

//   setTableData() {
//     this.rows = this.requests;
//   }
  
//   updateFilter(event) {
//     const val = event.target.value.toLowerCase();

//     // filter our data
//     const temp = this.requests.filter(function(d) {
//       return d.Email.toLowerCase().indexOf(val) !== -1 || !val;
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
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: "app-request-table",
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})

export class RequesttableComponent {
  public config: PerfectScrollbarConfigInterface = {};
  constructor(private userservice: UserService, private fb: FormBuilder) {}
  buydata: FormGroup;
  //@Input() btcAddresses = [];
  @Input() requests = [];

  is2ndVisible = false;
  isOkLoading = false;
  id =localStorage.getItem('ID');

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    // this.buydata = this.fb.group({
    //   AddressBTC: ["", Validators.required],
    //   AddressETH: ["", Validators.required],
    // });
  }
  Approve(){
    this.userservice.updateRequestApproved(this.id).subscribe(
      data => {
        console.log("got response from server", data);
        // alert("Registeration Successfull!");
        // this.loading = false;
        console.log('succesfully uproved request');
      },
      error => {
        console.log("error in save button");
      }
    );
  }
  
  
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

//   @Input() buyers = [];
// name = this.buyers;

}
