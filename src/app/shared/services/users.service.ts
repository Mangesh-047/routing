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
      id: 1
    },
    {
      fname: 'Jhonny',
      id: 2
    },
    {
      fname: 'Jhonnie',
      id: 3
    },
    {
      fname: 'James',
      id: 4
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
