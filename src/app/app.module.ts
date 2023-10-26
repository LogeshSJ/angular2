import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { StorageService } from './services/storage.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TodoComponent,
//     NavbarComponent,
//     HomeComponent,
//     ShopComponent,
//     CartComponent,
//     ProductDetailsComponent,
//     NotfoundComponent,
//     LoginComponent,
//     OrdersComponent,
//     RegisterComponent,
//   ],
//   imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
//   providers: [TodoService],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
    NavbarComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, CartService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
