import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})

export class UserDetailsComponent {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private userservice: UserService) {}

  @Input() myrequests = [];


}
