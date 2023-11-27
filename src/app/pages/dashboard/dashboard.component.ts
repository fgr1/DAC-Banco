import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { BankAccountService } from "../../services/bank-account.service";
import { MODEL } from "../../shared";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  clients: MODEL.Client[] = [];

  constructor(
    private clientService: ClientService,
    private bankAccountService: BankAccountService
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  // Seu componente Angular
  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      const clients = data.filter((client) => client.type === "client");

      // Mapa para armazenar os detalhes da conta por ID do cliente
      const accountDetailsMap: { [clientId: string]: MODEL.BankAccount } = {};

      // Cria uma função para buscar os detalhes da conta por ID do cliente
      const getAccountDetails = (clientId: string) => {
        return this.bankAccountService
          .getAccountByLoggedUser(clientId)
          .subscribe((accountDetails) => {
            const clientDetails: MODEL.BankAccount = {
              client: clientId,
              accountLimit: accountDetails.accountLimit,
              manager: accountDetails.manager,
              saldo: accountDetails.saldo,
            };
            accountDetailsMap[clientId] = clientDetails;
          });
      };

      // Busca os detalhes da conta para cada cliente
      clients.forEach((client) => {
        getAccountDetails(client.id);
      });

      // Espera pela resolução de todas as chamadas assíncronas antes de associar os detalhes da conta aos clientes
      setTimeout(() => {
        clients.forEach((client) => {
          client["accountDetails"] = accountDetailsMap[client.id];
        });
        this.clients = clients;
      }, 1000); // Tempo de espera para garantir que todas as chamadas assíncronas sejam concluídas (ajuste conforme necessário)
    });
  }
}
