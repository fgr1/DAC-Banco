import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
import { MODEL } from "../shared";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
    private BASE_URL = env.BASE_URL + "icons/";
    private httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }), 
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<MODEL.Manager[]> {
    return this.httpClient.get<MODEL.Manager[]>(this.BASE_URL, this.httpOptions);
  }

  getById(id: number): Observable<MODEL.Manager> {
    return this.httpClient.get<MODEL.Manager>(
      this.BASE_URL + id,
      this.httpOptions
    );
  }

  create(manager: MODEL.Manager): Observable<MODEL.Manager> {
    return this.httpClient.post<MODEL.Manager>(
      this.BASE_URL,
      JSON.stringify(manager),
      this.httpOptions
    );
  }

  update(manager: MODEL.Manager): Observable<MODEL.Manager> {
    return this.httpClient.put<MODEL.Manager>(
      this.BASE_URL + manager.id,
      JSON.stringify(manager),
      this.httpOptions
    );
  }

  delete(id: number): Observable<MODEL.Manager> {
    return this.httpClient.delete<MODEL.Manager>(
      this.BASE_URL + id,
      this.httpOptions
    );
  }
}
