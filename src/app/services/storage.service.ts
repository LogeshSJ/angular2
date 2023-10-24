import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private users: User[] = [
    { id: 1, email: 'logesh@gmail.com', password: 'logesh' },
  ];

  constructor() {}

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setLoggedInUser(user: User) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }
  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedUser') as string);
  }
  removeLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
  }
  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
  saveProducts(Products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(Products));
  }

  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
  // SetCart(cart:Cart[]):{
  //   localStorage.setItem('cart'.JSON.stringify(cart));
  // }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') as string);
  }
}
