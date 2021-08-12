import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadProductsService {
  constructor(private http : HttpClient) { }

  url:string = "https://localhost:44303/api/retailer/";

  getRetailerId(retaileremail:string):Observable<any>{
    return this.http.get(this.url+"GetRetailersId?retaileremail="+retaileremail);
  }
  postFile(retailerid:string,productname: string,productquantity:string,productprice: string,productdescription: string,productbrand: string,categoryid:string,fileToUpload: File) {
    debugger
    const endpoint = 'https://localhost:44303/api/productupload/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('RetailerId',retailerid);
    formData.append('ProductName', productname);
    formData.append('ProductQuantity', productquantity);
    formData.append('ProductPrice', productprice);
    formData.append('ProductDescription', productdescription);
    formData.append('ProductBrand', productbrand);
    formData.append('CategoryId', categoryid);
   
    
    return this.http
      .post(endpoint, formData);
}

}
