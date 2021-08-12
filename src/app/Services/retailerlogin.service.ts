import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RetailerloginService {

  url:string = "https://localhost:44303/api/retailer/";

  constructor(private http:HttpClient) { }

  checkLogin(retaileremail : string, retailerpassword : string) : Observable<any>{
    return this.http.get(this.url+"retailer-login?retaileremail="+retaileremail+"&retailerpassword="+retailerpassword);
  }

}

