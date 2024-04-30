import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { products } from '../services/products';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrl: './headphone.component.css'
})
export class HeadphoneComponent {

  constructor(private service : ProductsService,private cart:CartService){}
  cartItems:products[]=[];
  addItemtoCart(product:products){
    this.cartItems.push(product);
  }
  product:any;
  addtocart(pro:products){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart');
  }
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.product=result;
      console.log(this.product);
    })
    
    }
  }



