import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
// })
// export class CartComponent implements OnInit {
//   cartProducts: Product[]=[];

//   constructor(private cartServices: CartService){}
//   ngOnInit(): void {
//     // this.cartProducts=this.cartServices.getCartProducts();
//   }

// }


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Product[] = [];
  constructor(
    private cartservice: CartService,
    private storageService: StorageService,
    private router: Router
  ) {}

  cartProducts = this.storageService.getCartProducts();

  clearcart() {
    this.storageService.clearcart();
    this.router.navigate(['home'], { replaceUrl: true });
  }
}