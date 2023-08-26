import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
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
  private readonly LS_KEY: string = "userLogged";

  constructor(private httpClient: HttpClient) {}

  public get userLogged(): MODEL.User | null {
    let user = localStorage[this.LS_KEY];
    return user ? JSON.parse(user) : null;
  }

  public set userLogged(user: MODEL.User) {
    localStorage[this.LS_KEY] = JSON.stringify(user);
  }

  login(login: MODEL.Login): Observable<MODEL.User | null> {
    // return this.httpClient.post<MODEL.Login | null>(this.BASE_URL, login, {
    //   ...this.httpOptions,
    // });
    const user = new MODEL.User(
      "1",
      "Rickson",
      "123",
      "email@email.com",
      "senha@123",
      "123",
      "client"
    );
    return of(user);
  }

  logout() {
    delete localStorage[this.LS_KEY];
  }
}
