import { Component, Input } from '@angular/core';
import { UserService } from 'sdk/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})

export class UserDetailsComponent {
  

  constructor(private userservice: UserService) {}

  @Input() myrequests = [];


}
