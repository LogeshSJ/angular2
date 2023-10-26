import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
// @Injectable({
//   providedIn: 'root',
// })
// export class StorageService {
//   private users: User[] = [
//     { id: 1, email: 'logesh@gmail.com', password: 'logesh' },
//   ];

//   constructor() {}

//   loadUsers() {
//     if (!localStorage.getItem('users')) {
//       localStorage.setItem('users', JSON.stringify(this.users));
//     }
//   }
//   getAllUsers(): User[] {
//     return JSON.parse(localStorage.getItem('users') as string);
//   }

//   setLoggedInUser(user: User) {
//     localStorage.setItem('loggedInUser', JSON.stringify(user));
//   }
//   getLoggedInUser(): User {
//     return JSON.parse(localStorage.getItem('loggedUser') as string);
//   }
//   removeLoggedInUser(): void {
//     localStorage.removeItem('loggedInUser');
//   }
//   isUserLoggedIn(): boolean {
//     return localStorage.getItem('loggedInUser') !== null;
//   }
//   saveProducts(Products: Product[]): void {
//     localStorage.setItem('products', JSON.stringify(Products));
//   }

//   getCachedProducts(): Product[] {
//     return JSON.parse(localStorage.getItem('products') as string);
//   }
// SetCart(cart:Cart[]):{
//   localStorage.setItem('cart'.JSON.stringify(cart));
// }

//   getCart() {
//     return JSON.parse(localStorage.getItem('cart') as string);
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  users: User[] = [
    {
      id: 1,
      email: 'user1@user.com',
      password: 'hello',
    },
  ];

  constructor() {}

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  setLoggedInUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeLoggedInUser() {
    localStorage.removeItem('user');
  }

  isLoggedInUser() {
    return localStorage.getItem('user') !== null;
  }

  getLoggedInUser(): User | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  SetCart(cart: Cart[]): void {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  loadCartProducts(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartProducts(): Product[] {
    return JSON.parse(localStorage.getItem('cart') as string);
  }

  clearcart() {
    let order: Product[] = JSON.parse(localStorage.getItem('cart') as string);
    localStorage.setItem('order', JSON.stringify(order) as string);
    return localStorage.setItem('cart', JSON.stringify([]) as string);
  }

  SetProducts(products: Product[]): void {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  getorder() {
    return JSON.parse(localStorage.getItem('order') as string);
  }
}
