import "rxjs/add/operator/map";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectConfig } from "./project.config";
import { HttpHeaders } from "@angular/common/http"
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {

  }
  options = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    })

  }


  public getallsellers(): Observable<any> {
    const url = ProjectConfig.getPath() + "/seller/all";
    //return this.http.get(url, credentials);
    return this.http.get(url, this.options);
  }

  public getallbuyers(): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/all";
    //return this.http.get(url, credentials);
    return this.http.get(url, this.options);
  }

  public addOneBuyer(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/add";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials, this.options);
  }
  public addOneSeller(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/seller/add";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials ,this.options);
  }
  public deleteMyRequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/" + id;
    return this.http.delete(url ,this.options);
  }


  public deleteBuyer(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/buyer/" + id;
    return this.http.get(url , this.options);
  }
  public deleteSeller(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/seller/" + id;
    return this.http.get(url ,this.options);
  }
  
  public getapprovedrequests(): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approved/all";
    //return this.http.get(url, credentials);
    return this.http.get(url , this.options);
  }
  public getpendingrequests(): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/pending/all";
    //return this.http.get(url, credentials);
    return this.http.get(url , this.options);
  }
  public getallclients(): Observable<any> {
    const url = ProjectConfig.getPath() + "/clients/all";
    //return this.http.get(url, credentials);
    return this.http.get(url , this.options);
  }
  public getAddresses(): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/all";
    //return this.http.get(url, credentials);
    return this.http.get(url, this.options);
  }
  public postAddresses(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/add";
    //return this.http.get(url, credentials);
    return this.http.post(url, credentials ,this.options);
  }
  public gettheBIT(): Observable<any> {
    const url = ProjectConfig.getPath() + "/bitapi";
    //return this.http.get(url, credentials);
    return this.http.get(url ,this.options);
  }
  public gettheETH(): Observable<any> {
    const url = ProjectConfig.getPath() + "/ethapi";
    //return this.http.get(url, credentials);
    return this.http.get(url,this.options);
  }
  public gettheclient(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/client/" + id;
    return this.http.get(url , this.options);
  }
 
  public getmyapprovedrequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approved/" + id;
    return this.http.get(url , this.options);
  }
  public getmypendingrequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/pending/" + id;
    return this.http.get(url, this.options);
  }

  public adminLoginPassword(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/login/admin";
    return this.http.post(url, credentials , this.options);
  }

  public userLogin(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/login";
    return this.http.post(url, credentials , this.options);
  }

  public addToRequest(body: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/add";
    return this.http.post(url, body , this.options);
  }
  public updateRequestApproved(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/approve/" + id;

    return this.http.put(url , this.options);
  }
  
  public setethaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/ethaddress";

    return this.http.post(url, credentials , this.options);
  }
  public setbtcaddreser(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/address/add";

    return this.http.post(url, credentials , this.options);
  }
  public userRegister(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/signup";

    return this.http.post(url, credentials , this.options);
  }
  public userForgotPassword(credentials: object): Observable<any> {
    const url = ProjectConfig.getPath() + "/sendmail";

    return this.http.post(url, credentials , this.options);
  }

}
