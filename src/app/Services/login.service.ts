import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = "https://localhost:44303/api/user/";
  constructor(private http : HttpClient) { }

  doLogin(useremail : string, userpassword: string) : Observable<any>{
      return this.http.get<any>(this.url+"do-login?useremail="+useremail+"&userpassword="+userpassword);
  }
}