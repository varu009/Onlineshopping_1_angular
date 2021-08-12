import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  url:string = "https://localhost:44303/api/";
  constructor(private http : HttpClient) { }
  

  changeRetailer(retaileremail : string, retailerpassword :string, newpassword : string):Observable<any>{
    const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
    return this.http.put<any>(this.url+"ChangePassword?retaileremail="+retaileremail+
    "&retailerpassword="+retailerpassword+"&newpassword="+newpassword,httpheader);
  }

  changeUser(useremail : string, userpassword:string, newpassword:string):Observable<any>{
    const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
    return this.http.put<any>(this.url+"userchangepassword?useremail="+useremail+
    "&userpassword="+userpassword+"&newpassword="+newpassword,httpheader);
  }
  
}
