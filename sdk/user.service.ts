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
////////////////////////////////Header////////////////////
  }
  options = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  }
  adminOptions ={
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'Bearer ' +localStorage.getItem("adminToken")
    })
  }

//////////////////////////////////Admin/////////////////////////
public adminLogin(credential: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/authenticate"
  return this.http.post(url, credential)
}
public getapprovedrequests(): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/request/approved/all";
  //return this.http.get(url, credentials);
  return this.http.get(url, this.adminOptions);
}
public getpendingrequests(): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/request/pending/all";
  //return this.http.get(url, credentials);
  return this.http.get(url, this.adminOptions);
}
public getallclients(): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/client/all";
  //return this.http.get(url, credentials);
  return this.http.get(url, this.adminOptions);
}
public getAddresses(): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/address/all";
  //return this.http.get(url, credentials);
  return this.http.get(url, this.adminOptions);
}
public postAddresses(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/address/add";
  //return this.http.get(url, credentials);
  return this.http.post(url, credentials, this.adminOptions);
}
public updateRequestApproved(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/request/approve/" + id;

  return this.http.put(url, null, this.adminOptions);
}
public getAdminWithdrawRequest(): Observable<any>{
  const url = ProjectConfig.getPath() + "/admin/request/withdraw/all";
  return this.http.get(url,this.adminOptions)
}
public approveWithdrawRequest(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/verify/withdraw/" + id;

  return this.http.put(url, null, this.adminOptions);
}
public verifyclient(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/admin/verify/user/" + id;
  return this.http.put(url, null, this.adminOptions)
}


//////////////////////////////////////////Password///////////////////////////////////////
 
public userForgotPassword(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/sendmail";

  return this.http.post(url, credentials, this.options);
}



/////////////////////////////BitApi & ethApi//////////////////////
public gettheBIT(): Observable<any> {
  const url = ProjectConfig.getPath() + "/bitapi";
  return this.http.get(url, this.options);
}
public gettheETH(): Observable<any> {
  const url = ProjectConfig.getPath() + "/ethapi";
  return this.http.get(url, this.options);
}

///////////////////////////////buyers/////////////////////////
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
public deleteBuyer(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/buyer/" + id;
  return this.http.get(url, this.options);
}
public confirmSell(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/confirm/sell";
  return this.http.post(url, credentials, this.options)
}


/////////////////////////////////Seller//////////////////////////
public getallsellers(): Observable<any> {
  const url = ProjectConfig.getPath() + "/seller/all";
  return this.http.get(url, this.options);
}
public addOneSeller(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/seller/add";
  return this.http.post(url, credentials, this.options);
}
public confirmBuy(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/confirm/buy";
  return this.http.post(url, credentials, this.options)
}
public deleteSeller(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/seller/" + id;
  return this.http.get(url, this.options);
}

 
///////////////////////////////////Clients request//////////////////////

public getmyapprovedrequest(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/request/approved/";
  return this.http.get(url , this.options);
}
public getmypendingrequest(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/request/pending/";
  return this.http.get(url, this.options);
}
public deleteMyRequest(id: String): Observable<any> {
    const url = ProjectConfig.getPath() + "/request/" + id;
    return this.http.delete(url, this.options);
}
public addToRequest(body: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/request/add";
  return this.http.post(url, body, this.options);
}

///////////////////////////////////////Login Sigup////////////////////

public userLogin(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/login";
  return this.http.post(url, credentials, this.options);
}
public userRegister(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/signup";

  return this.http.post(url, credentials, this.options);
}

//////////////////////////////Clients/////////////////////// 
public gettheclient(id: String): Observable<any> {
  const url = ProjectConfig.getPath() + "/client/";
  return this.http.get(url , this.options);
}
 

/////////////////////////////BuySell post of Client  
public getBuyerSeller(): Observable<any> {
  const url = ProjectConfig.getPath() + '/post/all'
  return this.http.get(url, this.options)
}
public deletebuySell(id: string): Observable<any> {
  const url = ProjectConfig.getPath() + "/post/" + id
  return this.http.delete(url, this.options)
}
public getSummery(): Observable<any> {
  const url = ProjectConfig.getPath()+"/post/summary";
  return this.http.get(url,this.options)
}
 

////////////////////////////Withdraw//////////////////////
public getclientWithdrawRequest(): Observable<any>{
  const url = ProjectConfig.getPath() + "/request/withdraw";
  return this.http.get(url,this.options)
}
public postWithdrawRequest(credentials: object): Observable<any> {
  const url = ProjectConfig.getPath() + "/request/withdraw"
  return this.http.post(url, credentials, this.options)
}  
  
  
 

 
}
