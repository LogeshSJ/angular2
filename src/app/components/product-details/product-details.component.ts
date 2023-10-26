import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
// })
// export class ProductDetailsComponent {

// }



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html',
})
export class ProductDetailComponent {
  id: string = '0';
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
  }
}