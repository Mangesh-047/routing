import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userObj!: Iuser
  userID!: number
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {

    // this.userID = +this._route.snapshot.params['userId']!
    // console.log(this._route.snapshot.params['userId'])
    // console.log(this.userID)

    this._route.params
      .subscribe((res) => {
        console.log(res['userId'])

        this.userID = +res['userId']
        this.userObj = this._userService.getUser(this.userID)!
      })
  }

  onEditUser() {
    this._router.navigate(['/users', this.userID, 'edit'])
  }
}
