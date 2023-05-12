import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, pstatus } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodId!: number
  prodObj!: Iproduct
  canEditProduct!: number
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((res: Params) => {
        this.prodId = +res['productId']
        this.prodObj = this._productsService.getProduct(this.prodId)
        // console.log(this.prodId);
      })

    this._route.queryParams
      .subscribe((qp: Params) => {
        // console.log(qp);
        this.canEditProduct = +qp['canEdit']
      })

  }


  onUpdate(pn: HTMLInputElement, pstatus: HTMLSelectElement) {

    let obj: Iproduct = {
      pname: pn.value,
      pid: this.prodId,
      pstatus: pstatus.value as pstatus,
      canReturn: this.prodObj.canReturn
    }
    // console.log(obj);

    this._productsService.updateProduct(obj)

    this._router.navigate(['/products', this.prodId])
  }

}
