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
    const url = ProjectConfig.getPath() + "/seller/all";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public getallbuyers(): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/all";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }

  public addOneBuyer(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/add";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials);
  }
  public addOneSeller(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/seller/add";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials);
  }

  public deleteMyRequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/delete" + id;
    return this.http.get(url);
  }


  public deleteBuyer(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/" + id;
    return this.http.get(url);
  }
  public deleteSeller(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/seller/" + id;
    return this.http.get(url);
  }
  public getapprovedrequests(): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approved/all";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  public getpendingrequests(): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/pending/all";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  public getallclients(): Observable<any> {
    const url = ProjectConfig.getPath() + "/clients";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  public getAddresses(): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/all";
    //return this.http.get(url, credentials);
    return this.http.get(url);
  }
  public postAddresses(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/add";
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
  }
  public sendrequest(id: String, credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/sendmyrequest/" + id;
    return this.http.post(url, id, credentials);
  }
  public getmyapprovedrequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approved/" + id;
    return this.http.get(url);
  }
  public getmypendingrequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/pending/" + id;
    return this.http.get(url);
  }
 
  public adminLoginPassword(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/login/admin";
    return this.http.post(url, credentials);
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
    const url = ProjectConfig.getPath() + "/request/add";

    return this.http.post(url, body);
  }
  public updateRequestApproved(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approve/" +id;

    return this.http.put(url , id);
  }
  // public receiveCoins(body: object): Observable<any> {
  //   const url = ProjectConfig.getPath() + "/receivecoins";

  //   return this.http.post(url, body);
  // }
  public setethaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/ethaddress";

    return this.http.post(url, credentials);
  }
  public setbtcaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/add";

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
  //Delete request "/request/:id"
}
