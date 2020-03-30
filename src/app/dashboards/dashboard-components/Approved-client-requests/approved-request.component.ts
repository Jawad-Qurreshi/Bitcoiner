import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.css']
})

export class ApprovedRequestComponent {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private userservice: UserService) {}

  @Input() myApprovedRequests = [];


}
