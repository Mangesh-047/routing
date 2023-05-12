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
      pstatus: pstatus.del,
      canReturn: 1
    },
    {
      pname: 'Iphone 13',
      pid: 2,
      pstatus: pstatus.dis,
      canReturn: 0
    },
    {
      pname: 'Vivo',
      pid: 3,
      pstatus: pstatus.dis,
      canReturn: 1
    },
    {
      pname: 'Sony',
      pid: 4,
      pstatus: pstatus.inp,
      canReturn: 0
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
