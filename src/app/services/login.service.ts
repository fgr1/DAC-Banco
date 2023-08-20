import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
import { MODEL } from "../shared";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private BASE_URL = env.BASE_URL + "auth/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  login(login: MODEL.Login): Observable<MODEL.Login | null> {
    return this.httpClient.post<MODEL.Login | null>(this.BASE_URL, login, {
      ...this.httpOptions,
    });
  }

  logout() {}
}
