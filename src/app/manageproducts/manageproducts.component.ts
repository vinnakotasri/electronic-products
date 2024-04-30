import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {

    constructor(private service:ProductsService){}
    delete(p:any){
      this.service.deleteProduct(p);
      alert("product deleted successfully");
    }
    toSave(p:any){
        p.productEdit=false;
        this.service.updateProduct(p);
        alert("product updated successfully");
    }
    toUpdate(p:any){
      p.productEdit=true;
    }
    products:any;
    ngOnInit(){
      this.service.getProducts().subscribe((res)=>{
        this.products=res;
      });
    }
  }

