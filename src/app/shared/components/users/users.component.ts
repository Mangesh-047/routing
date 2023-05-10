import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../model/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  userArray!: Array<Iuser>

  constructor(
    private _userService: UsersService,

  ) { }

  ngOnInit(): void {
    this.userArray = this._userService.getAllUsers()
    
  }

}
