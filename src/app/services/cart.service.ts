import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   cart: Product[]=[];

//   constructor(private storageService:StorageService,private authService: AuthService) { }
//   getCount(): number{
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
//   return 0;
// }

// }

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

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor(private storageService: StorageService) {}

  addToCart(id: number): void {
    const products = this.storageService.getCachedProducts();
    const clickedProduct = products.find((prod) => prod.id === id);

    if (clickedProduct) {
      const existingCartItem = this.cart.find((item) => item.id === id);

      if (!existingCartItem) {
        this.cart.push({ ...clickedProduct, id: id, count: 1 });
      } else {
        existingCartItem.count = (existingCartItem.count || 0) + 1;
      }

      this.storageService.loadCartProducts(this.cart);
    }
  }

  getCartProducts(): Product[] {
    return this.cart;
  }

  getCartCount(): number {
    let count: number = 0;
    const cartProducts = this.storageService.getCartProducts();

    for (let product of cartProducts) {
      if (product.count) {
        count += product.count;
      }
    }

    return count;
  }
}
