import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId!: number
  prodObj!: Iproduct
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((res: Params) => {
        this.productId = +res['productId']

        // console.log(this.productId)
        this.prodObj = this._productsService.getProduct(this.productId)
      })
  }

  onEditProduct() {
    this._router.navigate(['/products', this.productId, 'edit'], {
      queryParamsHandling: 'preserve'
    })
  }
}
