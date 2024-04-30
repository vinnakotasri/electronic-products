import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AcComponent } from './ac/ac.component';
import { FridgeComponent } from './fridge/fridge.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { CameraComponent } from './camera/camera.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserdashboardComponent,
    ContactComponent,
    ProductComponent,
    MobilesComponent,
    AcComponent,
    FridgeComponent,
    HeadphoneComponent,
    CameraComponent,
    CartComponent,
    AdmindashboardComponent,
    AddproductsComponent,
    ManageproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
