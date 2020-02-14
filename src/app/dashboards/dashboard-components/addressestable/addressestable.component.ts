
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-addressestable",
  templateUrl: "./addressestable.component.html"
})

export class AddressestableComponent {
  

  constructor(private userservice: UserService, private fb: FormBuilder) {}
  addressData: FormGroup;
  @Input() btcAddresses = [];

  is2ndVisible = false;
  isOkLoading = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addressData = this.fb.group({
      AddressBTC: ["", Validators.required],
      AddressETH: ["", Validators.required],
    });
  }
  SaveToDB(){
    this.userservice.postAddresses(this.addressData.value).subscribe(
      data => {
        console.log("got response from server", data);
        // alert("Registeration Successfull!");
        // this.loading = false;
        console.log('succesfully saved data to db');
      },
      error => {
        console.log("error in save button");
      }
    );
  }
  
  
  showmModal(): void {
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
}
