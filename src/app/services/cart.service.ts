import { Injectable } from '@angular/core';
import { products } from '../services/products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartitems:products[]=[];
  addItemtoCart(product:products){
    this.cartitems.push(product);
  }           

  getItems(){
    return of(this.cartitems);
  }

  getlength(){
    return this.cartitems.length;
  }

  getTotal(){
    let total=0;
    for(let i=0;i<this.cartitems.length;i++){
      total+=this.cartitems[i].productPrice;
    }
    return total;
  }

  deleteitem(pod:products){
    let res=this.cartitems.findIndex(p=>p.productId==pod.productId);
    this.cartitems.splice(res,1)
  }
  buynow(pod:products){
    let res=this.cartitems.findIndex(p=>p.productId==pod.productId);
    this.cartitems.splice(res,1)
  }
  removeAll(){
    this.cartitems.splice(0,this.cartitems.length)
}

}