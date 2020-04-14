
import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: "app-addressestable",
  templateUrl: "./addressestable.component.html",
  styleUrls: ['./addressestable.component.css']
})

export class AddressestableComponent {
  
  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    private message: NzMessageService,
    private userservice: UserService, 
    private fb: FormBuilder) {}
  addressData: FormGroup;
  @Input() btcAddresses = [];

  is2ndVisible = false;
  isOkLoading = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addressData = this.fb.group({
      btcAddress: ["", Validators.required],
      ethAddress: ["", Validators.required],
    });
  }
  
  showmModal(): void {
    this.is2ndVisible = true;
  }

  handleOk(): void {
    this.userservice.postAddresses(this.addressData.value).subscribe(
      response => {
        if (response.message === 'TOKEN_INVALID' || response.message === 'TOKEN_NOT_SUPPLIED') {

        } else {
        this.message.success("Address saved");
        }
      },
      error => {
        this.message.error("Unable to save Address");
      }
    );
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
