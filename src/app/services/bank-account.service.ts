import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
import { MODEL } from "../shared";

@Injectable({
  providedIn: "root",
})
export class BankAccountService {
  private BASE_URL = env.BASE_URL + "bank-accounts/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<MODEL.BankAccount[]> {
    return this.httpClient.get<MODEL.BankAccount[]>(
      this.BASE_URL,
      this.httpOptions
    );
  }

  getById(id: number): Observable<MODEL.BankAccount> {
    return this.httpClient.get<MODEL.BankAccount>(
      this.BASE_URL + id,
      this.httpOptions
    );
  }

  create(bankAccount: MODEL.BankAccount): Observable<MODEL.BankAccount> {
    return this.httpClient.post<MODEL.BankAccount>(
      this.BASE_URL,
      JSON.stringify(bankAccount),
      this.httpOptions
    );
  }

  update(bankAccount: MODEL.Client): Observable<MODEL.BankAccount> {
    return this.httpClient.put<MODEL.BankAccount>(
      this.BASE_URL + bankAccount.id,
      JSON.stringify(bankAccount),
      this.httpOptions
    );
  }

  delete(id: number): Observable<MODEL.BankAccount> {
    return this.httpClient.delete<MODEL.BankAccount>(
      this.BASE_URL + id,
      this.httpOptions
    );
  }
}
