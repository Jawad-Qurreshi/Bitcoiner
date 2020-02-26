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