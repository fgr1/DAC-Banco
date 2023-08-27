import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { SaqueComponent } from "../../pages/saque/saque.component";
import { DepositoComponent } from "../../pages/deposito/deposito.component";
import { TransferenciaComponent } from "../../pages/transferencia/transferencia.component";
import { ExtratoComponent } from "../../pages/extrato/extrato.component";
import { AuthGuard } from "./auth.guard";

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
    path: "saque",
    component: SaqueComponent,
    canActivate: [AuthGuard],
    data: {
      role: "client",
    },
  },
  {
    path: "deposito",
    component: DepositoComponent,
    canActivate: [AuthGuard],
    data: {
      role: "client",
    },
  },
  {
    path: "transferencia",
    component: TransferenciaComponent,
    canActivate: [AuthGuard],
    data: {
      role: "client",
    },
  },
  {
    path: "extrato",
    component: ExtratoComponent,
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
