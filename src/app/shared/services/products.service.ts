import { Injectable } from '@angular/core';
import { Iproduct, pstatus } from '../model/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray: Iproduct[] = [
    {
      pname: 'Samsung S21',
      pid: 1,
      pstatus: pstatus.del
    },
    {
      pname: 'Iphone 12',
      pid: 2,
      pstatus: pstatus.dis
    },
    {
      pname: 'Vivo',
      pid: 3,
      pstatus: pstatus.dis
    },
    {
      pname: 'Sony',
      pid: 4,
      pstatus: pstatus.inp
    }
  ]
  constructor(
    private _snackbarService: SnackbarService
  ) { }


  getAllProduct(): Array<Iproduct> {
    return this.productsArray;
  }

  getProduct(id: number): Iproduct {
    return this.productsArray.find(e => e.pid === id)!
  }

  updateProduct(prod: Iproduct) {
    this.productsArray.forEach(e => {
      if (e.pid === prod.pid) {
        e.pname = prod.pname
        e.pstatus = prod.pstatus
      }

    })

    this._snackbarService.snackbarOpen(`the product information is Successfully Updated `)


  }
}
