import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:44303/api/filter/";
  filterbyprice(pricerange:string):Observable<any>
  {
     // debugger;
      return this.http.get<any>(this.url+"Filterbyprice?price="+pricerange);
  }

  filterbycategory(catname:string):Observable<any>
  {
     // debugger;
     return this.http.get<any>(this.url+"Filterbycategory?category="+catname);
  }
}