import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { SignupValidationComponent } from "src/app/pages/signup-validation/signup-validation.component";
import { AuthGuard } from "./auth.guard";
import { ClientsComponent } from "src/app/pages/clients/clients.component";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: "administrator",
    },
  },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: {
      role: "client",
    },
  },
  {
    path: "signup-validation",
    component: SignupValidationComponent,
    canActivate: [AuthGuard],
    data: {
      role: "manager",
    },
  },
  {
    path: "clients",
    component: ClientsComponent,
    canActivate: [AuthGuard],
    data: {
      role: "manager",
    },
  },
  {
    path: "tables",
    component: TablesComponent,
    canActivate: [AuthGuard],
    data: {
      role: "client",
    },
  },
  {
    path: "icons",
    component: IconsComponent,
    canActivate: [AuthGuard],
    data: {
      role: "administrator",
    },
  },
  {
    path: "maps",
    component: MapsComponent,
    canActivate: [AuthGuard],
    data: {
      role: "administrator",
    },
  },
];
