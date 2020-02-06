import { Component, Input } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html'
})
export class EarningsComponent {

  @Input() singleclient = [];
  
  public config: PerfectScrollbarConfigInterface = {};

  constructor() { }
}
