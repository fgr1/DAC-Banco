import { Routes } from "@angular/router";

import { ClientComponent } from "src/app/pages/client/client.component";
import { ClientsComponent } from "src/app/pages/clients/clients.component";
import { SignupValidationComponent } from "src/app/pages/signup-validation/signup-validation.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { AdminComponent } from "src/app/pages/admin/admin.component";
import { ManagersComponent } from "src/app/pages/managers/managers.component";
import { DepositoComponent } from "../../pages/deposito/deposito.component";
import { ExtratoComponent } from "../../pages/extrato/extrato.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { SaqueComponent } from "../../pages/saque/saque.component";
import { TransferenciaComponent } from "../../pages/transferencia/transferencia.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { AuthGuard } from "./auth.guard";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "admin",
    component: AdminComponent,
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
    path: "managers",
    component: ManagersComponent,
    canActivate: [AuthGuard],
    data: {
      role: "administrator",
    },
  },
  {
    path: "client/:id",
    component: ClientComponent,
    canActivate: [AuthGuard],
    data: {
      role: "manager",
    },
  },
];
