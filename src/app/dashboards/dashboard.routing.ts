import { Routes } from '@angular/router';
import { GuardService } from "../../../sdk/guard.service"
import { GuardServiceAdmin } from "../../../sdk/guardAdmin.service"
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        },
        canActivate: [GuardServiceAdmin]
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 2' }
          ]
        },
        canActivate: [GuardService]
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'Dashboard 3',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 3' }
          ]
        }
      }
    ]
  }
];
