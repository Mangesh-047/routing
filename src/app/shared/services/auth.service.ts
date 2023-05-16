import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLogin: boolean = false

  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService
  ) { }


  isAuthenticated(): Promise<boolean> {
    return new Promise((res, rej) => {
      this.isUserLogin = Boolean(localStorage.getItem('token')) ?? false
      res(this.isUserLogin);
    })
  }

  loginToApp() {
    this._snackbarService.snackbarOpen(`Login Successfully`, 1000)
    this.isUserLogin = true

    localStorage.setItem('userRole', 'admin')
    localStorage.setItem('token', 'JWT TOKEN')

    this._router.navigate(['/home'])

  }

  logOutToApp() {
    this._snackbarService.snackbarOpen(`Log out......`, 1000)

    this._router.navigate(['/'])
    this.isUserLogin = false

  }
}
