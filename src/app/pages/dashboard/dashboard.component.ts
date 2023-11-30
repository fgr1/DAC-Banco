import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { BankAccountService } from "../../services/bank-account.service";
import { GerenteService } from "../../services/gerente.service";
import { MODEL } from "../../shared";
import { map } from "rxjs/operators";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  clients: MODEL.Client[] = [];
  clientAccountDetails: Map<string, MODEL.BankAccount> = new Map();

  constructor(
    private clientService: ClientService,
    private bankAccountService: BankAccountService,
    private gerenteService: GerenteService
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      const clients = data.filter((client) => client.type === "client");
      this.clients = clients;

      forkJoin(
        this.clients.map((client) =>
          this.bankAccountService.getAccountByLoggedUser(client.id).pipe(
            map((accountDetails: MODEL.BankAccount) => ({
              clientId: client.id || "",
              accountDetails: accountDetails || null,
            }))
          )
        )
      ).subscribe(
        (
          details: {
            clientId: string;
            accountDetails: MODEL.BankAccount | null;
          }[]
        ) => {
          const clientAccountDetails = new Map<string, MODEL.BankAccount>();

          details.forEach((detail) => {
            if (detail.accountDetails) {
              clientAccountDetails.set(detail.clientId, detail.accountDetails);
            }
          });

          // Agora vamos exibir os detalhes no console
          clientAccountDetails.forEach((value, key) => {
            console.log(`Detalhes da conta para o cliente ${key}:`, value);
          });

          // Definir clientAccountDetails como uma propriedade do componente para uso posterior
          this.clientAccountDetails = clientAccountDetails;

          console.log(
            "Detalhes das contas associados aos clientes:",
            this.clientAccountDetails
          );
        }
      );
    });
  }
}
