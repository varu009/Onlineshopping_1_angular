import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http:HttpClient,private http1:HttpClient) { }
  getProduct(){
    //debugger;
    return this.http.get("https://localhost:44303/api/productupload/getproducts");

}
}
