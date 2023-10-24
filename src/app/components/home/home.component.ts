import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
Products:Product[]=[];
constructor(private productService:ProductService,private cartService:CartService){}
  ngOnInit():void{
    this.productService.getAllProducts().subscribe({
      next:(data: Product[])=>{
        this.Products =data;
        this.productService.saveProducts(data)
      },
      complete:()=>{
        console.log('completed');
      },
      error:(error:Error)=>{
        console.log('Message',error.message);
        console.log('Name',error.name);
      },
    });
  }
  addToCart(id:number):void{
    // this.cartService.addToCart(id);
  }
}
