import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductserviceService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
// })
// export class HomeComponent {
// Products:Product[]=[];
// constructor(private productService:ProductService,private cartService:CartService){}
//   ngOnInit():void{
//     this.productService.getAllProducts().subscribe({
//       next:(data: Product[])=>{
//         this.Products =data;
//         this.productService.saveProducts(data)
//       },
//       complete:()=>{
//         console.log('completed');
//       },
//       error:(error:Error)=>{
//         console.log('Message',error.message);
//         console.log('Name',error.name);
//       },
//     });
//   }
//   addToCart(id:number):void{
//     // this.cartService.addToCart(id);
//   }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {
  products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductserviceService,
    private cartService: CartService,
    private storageService: StorageService
  ) {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        // console.log(data);
        this.products = data;
        this.productService.saveProducts(data);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message:', error.message);
        console.log('Name:', error.name);
      },
    });
  }
  // ngOnInit(): void {
  //   this.productService.getAllProducts().subscribe({
  //     next: (data: Product[]) => {
  //       // console.log(data);
  //       this.products = data;
  //       this.productService.saveProducts(data);
  //     },
  //     complete: () => {
  //       console.log('completed');
  //     },
  //     error: (error: Error) => {
  //       console.log('Message:', error.message);
  //       console.log('Name:', error.name);
  //     },
  //   });
  // }
  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }
}
