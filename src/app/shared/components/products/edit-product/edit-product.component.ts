import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, pstatus } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodId!: number
  prodObj!: Iproduct
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((res: Params) => {
        this.prodId = +res['productId']
        this.prodObj = this._productsService.getProduct(this.prodId)
        // console.log(this.prodId);

      })
  }


  onUpdate(pn: HTMLInputElement, pstatus: HTMLSelectElement) {
    let obj: Iproduct = {
      pname: pn.value,
      pid: this.prodId,
      pstatus: pstatus.value as pstatus
    }

    this._productsService.updateProduct(obj)

    this._router.navigate(['/products', this.prodId])
  }

}
