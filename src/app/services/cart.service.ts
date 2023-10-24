import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]=[];

  constructor(private storageService:StorageService,private authService: AuthService) { }
  getCount(): number{
    // let cart:Cart[] =this.storageService.getCart();
    // let loggedInUser: User =this.authService.getLoggedInUser();

    // let userCart:Cart | undefined= cart.find((c)=> c.user.id === loggedInUser.id);

    // let count: number=0;
    // if(userCart){
    //   for(let product of userCart.cart){
    //     if(product.count) count+= product.count;
    //   }
    // }
    // // for(let c of this.cart){

    // // }
    // return count;
    return 0;
  }
  

  }

  // getCartProducts():Product[]{
  //   return this.cart;
  // }
  // getUserCart():Cart[]{
  //   new Observable(observer=>{})
  //   return this.storageService.getCart();
  // }

  // addToCart(id:number){
  //   let cart:Cart[]=StorageService.getCart();

  //   if(cart === null){
  //     cart=[];
  //   }
  //   console.log(cart);

  //   return cart;
  
  


