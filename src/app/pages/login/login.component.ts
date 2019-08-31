import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { reject } from 'q';

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
    private _user: UserService
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

    console.log ( f.value);

    this._user.login ( this.user ).subscribe (
      response => {

        this._user.getData ( this.user.email ).subscribe (
          (response:any) => {
            console.log ('hola' , response.payload.data(), response.payload.id);
    
          },
          reject => {
            console.log (reject);
          }
        );




        console.log ( response );
      },
      reject => {
        console.error ( reject);
      }
    );



    //this.router.navigate (['/home', 'noticias']);

  }

}
