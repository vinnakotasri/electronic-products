import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  user:any;
  username:any;
  cartLength:any;
  constructor(private router:Router,private service:CartService){}
  ngDoCheck(){
    this.cartLength=this.service.getlength();
  }
    ngOnInit(){
    if (localStorage.getItem('user')!=null){
      this.user=JSON.parse(localStorage.getItem('user')||'{}');
      this.username=this.user.username;
  
    }
    else{
      this.router.navigateByUrl("/")
    }
  }
}

