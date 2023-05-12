import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArray: Iuser[] = [
    {
      fname: 'Jhon',
      id: 1,
      userRole: 'admin'
    },
    {
      fname: 'Jhonny',
      id: 2,
      userRole: 'user'
    },
    {
      fname: 'Jennie',
      id: 3,
      userRole: 'user'
    },
    {
      fname: 'James',
      id: 4,
      userRole: 'admin'
    }
  ]
  constructor(
    private _snackbarService: SnackbarService
  ) { }


  getAllUsers(): Array<Iuser> {
    return this.usersArray
  }

  getUser(id: number): Iuser {
    return this.usersArray.find(e => e.id === id)!
  }

  updateUser(obj: Iuser) {
    this.usersArray.forEach(e => {
      if (e.id === obj.id) {
        e.fname = obj.fname
      }
    })

    this._snackbarService.snackbarOpen(`The username is Update to ${obj.fname}`)
  }
}
