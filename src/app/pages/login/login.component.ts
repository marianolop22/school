import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { reject } from 'q';
import { SchoolService } from 'src/app/services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends Base implements OnInit {

  public user: User = new User();

  constructor(
    private router: Router,
    private _userService: UserService,
    private _schoolService: SchoolService
  ) {
    super();
    this.loading = false;

    // setTimeout(() => {
    //   this.loading = false;
    //   console.log('mando false');
    // }, 500);
  }

  ngOnInit() {
    init_plugins();
  }

  login ( f:NgForm) {

    this._userService.login ( this.user ).subscribe (
      response => {

        this._userService.setUser ( this.user.email );
        this._userService.setSessionCredentials ( response );
        this._schoolService.setSchool ('V9uV3ZkLoQ4DzojgkiBL');
        console.log ( response );
      },
      reject => {
        console.error ( reject);
      }
    );



    //this.router.navigate (['/home', 'noticias']);

  }

}
