import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { products } from '../services/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private Service:ProductsService,private cart:CartService){}
  products:any;
  addtocart(pro:products){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart');
  }
  ngOnInit(){
    this.Service.getProducts().subscribe((result)=>{
      this.products=result;
      
    })
  }
}