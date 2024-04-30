import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from '../services/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {

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



