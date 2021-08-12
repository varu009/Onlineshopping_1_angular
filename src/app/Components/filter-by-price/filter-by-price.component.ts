import { Component, OnInit } from '@angular/core';
import {FilterService} from '../../Services/filter.service'
import {ProdModal} from '../../modal/ProdModal'
import {AddToCartService} from '../../Services/add-to-cart.service'

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {
  showModal : boolean = false;
  prod : ProdModal = new ProdModal();
  status : any;
  useremail = sessionStorage.getItem('useremail');
  filterbyprice: any =[];
  filterbycategory: any=[];
  constructor(private filterservice:FilterService,private addtocartserv : AddToCartService) { }
 
  ngOnInit(): void {
   
  }

  popprice(pricerange:string)
  {
    console.log(pricerange);
    this.filterbyprice=this.filterservice.filterbyprice(pricerange).subscribe((res)=>{
      this.filterbyprice=res;
      console.log(res)
    });
    console.log(this.filterbyprice);
  }

  popup(category:string)
  {
    console.log(category);
    this.filterbycategory=this.filterservice.filterbycategory(category).subscribe((data)=>{
      this.filterbycategory=data;
      console.log(data)
    });
    console.log(this.filterbycategory);  
  }

  openModal(productid : number ,productname : string, productprice: number,productquantity : number,productdescription : string,productbrand : string ,productimage1 : string,retailerid : number,categoryid : number){
    this.prod.productid = productid;
    this.prod.productname = productname;
    this.prod.productprice = productprice;
    this.prod.productquantity = productquantity;
    this.prod.productdescription = productdescription;
    this.prod.productbrand = productbrand;
    this.prod.productimage1 = productimage1;
    this.prod.retailerid = retailerid;
    this.prod.categoryid = categoryid;
  }

  addtocart(productid:number,quantity : number){
    console.log(quantity);
    if(this.useremail != null){
      this.status = this.addtocartserv.insertIntoCart(this.useremail, productid,quantity).subscribe(
        data => {
          if(data == "Success"){
            alert("Product successfully added");
          }
        }
      )
    }else{
      alert("Please login to buy products");
    }
  }
}
