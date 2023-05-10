import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  userObj!: Iuser;
  userID!: number
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((res) => {
        this.userID = +res['userId']
        // console.log(this.userID);

        this.userObj = this._usersService.getUser(this.userID)

      })
  }


  onUpdateUser(uname: HTMLInputElement) {

    let obj: Iuser = {
      fname: uname.value,
      id: this.userID
    }

    this._usersService.updateUser(obj)

    this._router.navigate(['/users', this.userID])
  }


}
