import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { GuardService } from "../../sdk/guard.service"

export const Approutes: Routes = [
  {
    path: "",
    loadChildren: "./starter/starter.module#StarterModule"
  },
  {
    path: "dashboard1",
    redirectTo: "/dashboard/dashboard1",
    pathMatch: "full",
    canActivate: [GuardService]
  },
  {
    path: "dashboard",
    loadChildren: "./dashboards/dashboard.module#DashboardModule"
  },
  {
    path: "component",
    loadChildren: "./component/component.module#ComponentsModule"
  },
  {
    path: "authentication",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "**",
    redirectTo: "./starter/starter.module#StarterModule"
  }
];
