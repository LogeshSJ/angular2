import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartProducts: Product[]=[];

  constructor(private cartServices: CartService){}
  ngOnInit(): void {
    // this.cartProducts=this.cartServices.getCartProducts();
  }

}
