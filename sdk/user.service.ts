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

  public getAddresses(): Observable<any> {
    const url = ProjectConfig.getPath() + "/getAddresses";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public postAddresses(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/btcaddress";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials);
  }

  public gettheBIT(): Observable<any> {
    const url = ProjectConfig.getPath() + "/bitapi";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public gettheETH(): Observable<any> {
    const url = ProjectConfig.getPath() + "/ethapi";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public gettheclient(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/client/" + id;
    return this.http.get(url);

    //return this.http.get(url);
  }
  public sendrequest(id: String, credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/sendmyrequest/" + id;
    return this.http.post(url, id, credentials);
  }

  public getmyrequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/getmyrequests/" + id;
    return this.http.get(url);
  }

  public getclientcount(): Observable<any> {
    const url = ProjectConfig.getPath() + "/quantityclients";
    return this.http.get(url);
  }

  public userLogin(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/login";
    return this.http.post(url, credentials);
  }

  // public getethaddreser(credentials: object): Observable<any> {
  //   const url = ProjectConfig.getPath() + "/ethaddress";

  //   return this.http.post(url, credentials);
  // }

  // public getbtcaddreser(credentials: object): Observable<any> {
  //   const url = ProjectConfig.getPath() + "/btcaddress";

  //   return this.http.post(url, credentials);
  // }

  public addToRequest(body: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/Addtorequests";

    return this.http.post(url, body);
  }

  public updateRequestApproved(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/updaterequest/" +id;

    return this.http.put(url , id);
  }


  public receiveCoins(body: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/receivecoins";

    return this.http.post(url, body);
  }
  public setethaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/ethaddress";

    return this.http.post(url, credentials);
  }

  public setbtcaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/btcaddress";

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
