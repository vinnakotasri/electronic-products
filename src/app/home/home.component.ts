import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service:ProductsService){}
  product:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.product=result;
      console.log(this.product);
    })
  }
}
