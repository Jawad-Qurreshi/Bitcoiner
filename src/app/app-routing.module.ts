import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

export const Approutes: Routes = [
  {
    path: "",
    loadChildren: "./starter/starter.module#StarterModule"
  },
  {
    path: "dashboard1",
    redirectTo: "/dashboard/dashboard1",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: "./dashboards/dashboard.module#DashboardModule"
  },
  {
    path: "component",
    loadChildren: "./component/component.module#ComponentsModule"
  },
  { path: "cards", loadChildren: "./cards/cards.module#CardsModule" },
  { path: "icons", loadChildren: "./icons/icons.module#IconsModule" },
  { path: "forms", loadChildren: "./form/forms.module#FormModule" },
  { path: "tables", loadChildren: "./table/tables.module#TablesModule" },
  { path: "charts", loadChildren: "./charts/charts.module#ChartModule" },
  {
    path: "widgets",
    loadChildren: "./widgets/widgets.module#WidgetsModule"
  },
  { path: "ecom", loadChildren: "./ecommerce/ecom.module#EcomModule" },
  {
    path: "timeline",
    loadChildren: "./timeline/timeline.module#TimelineModule"
  },
  {
    path: "extra-component",
    loadChildren:
      "./extra-component/extra-component.module#ExtraComponentModule"
  },
  { path: "apps", loadChildren: "./apps/apps.module#AppsModule" },
  {
    path: "apps/email",
    loadChildren: "./apps/email/mail.module#MailModule"
  },
  { path: "maps", loadChildren: "./maps/maps.module#MapsModule" },
  {
    path: "sample-pages",
    loadChildren: "./sample-pages/sample-pages.module#SamplePagesModule"
  },
  {
    path: "authentication",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "**",
    redirectTo: "/dashboard/dashboard1"
  }
];
