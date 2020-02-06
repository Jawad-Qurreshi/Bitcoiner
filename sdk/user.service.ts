import "rxjs/add/operator/map";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectConfig } from "./project.config";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  //private url1 = ProjectConfig.getPath() + "/api/clients";
  
  public getallsellers(): Observable<any> {
    const url = ProjectConfig.getPath() + "/ShowAllSellers";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  
  public getallbuyers(): Observable<any> {
    const url = ProjectConfig.getPath() + "/ShowAllBuyers";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  
  public getallrequests(): Observable<any> {
    const url = ProjectConfig.getPath() + "/ShowAllRequest";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public getallclients(): Observable<any> {
    const url = ProjectConfig.getPath() + "/clients";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public gettheclient(id: String): Observable<any>{
    const url = ProjectConfig.getPath() + "/client/" + id;
    console.log('get the clients waly credentials:',id);
    console.log('get the clients waly url :',url);
    return this.http.get(url);

    //return this.http.get(url);
  }

  public userLogin(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/login";

    return this.http.post(url, credentials);
  }
  public userRegister(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/signup";

    return this.http.post(url, credentials);
  }
  public userForgotPassword(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/sendmail";

    return this.http.post(url, credentials);
  }
}
