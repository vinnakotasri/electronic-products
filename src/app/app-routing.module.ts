import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AcComponent } from './ac/ac.component';
import { FridgeComponent } from './fridge/fridge.component';
import { CameraComponent } from './camera/camera.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductComponent},
      {path:'contact',component:ContactComponent},
      {path:'mobile',component:MobilesComponent},
      {path:'ac',component:AcComponent},
      {path:'fridge',component:FridgeComponent},
      {path:'Headphone',component:HeadphoneComponent},
      {path:'camera',component:CameraComponent},
      {path:'cart',component:CartComponent}
    ]},
      {path:'admin',component:AdmindashboardComponent,
      children:[
        {path:'home',component:HomeComponent},
        {path:'category',component:CategoryComponent},
      {path:'products',component:ProductComponent},
      {path:'mobile',component:MobilesComponent},
      {path:'ac',component:AcComponent},
      {path:'fridge',component:FridgeComponent},
      {path:'headphone',component:HeadphoneComponent},
      {path:'camera',component:CameraComponent},
      {path:'addproducts',component:AddproductsComponent},
      {path:'manageproducts',component:ManageproductsComponent}
    
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
