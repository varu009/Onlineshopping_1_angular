import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(private router : Router) { }
  useremail : string;
  retaileremail : string;
  adminemail : string;
  name : string;
  
  userlogged : boolean = false;

  userprofile : boolean = false;
  retailerprofile : boolean = false;

  ngOnInit(): void {
    this.useremail = sessionStorage.getItem('useremail');
    this.retaileremail = sessionStorage.getItem('retaileremail');
    this.adminemail  = sessionStorage.getItem('adminlogin');
    if(this.useremail != null ){
      this.name = this.useremail;
      this.userlogged = true;
      this.userprofile = true;
    }
    else if(this.adminemail != null){
      this.name = this.adminemail;
      this.userlogged = true;
    }else if(this.retaileremail != null){
      this.name = this.retaileremail;
      this.userlogged = true;
    }

  }
  userprofilebut(){
    this.router.navigate(['userprofile']);
  }
  logoff(){
    this.userlogged = false;
    this.userprofile = false;
    alert("Successfully logged off");
    sessionStorage.clear();
    this.router.navigate(['home'])
  }
}
