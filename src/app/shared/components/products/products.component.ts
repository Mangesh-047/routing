import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  productArray!: Iproduct[]

  constructor(
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {

    this.productArray = this._productsService.getAllProduct()
  }

}
