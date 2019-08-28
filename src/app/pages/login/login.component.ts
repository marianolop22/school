import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends Base implements OnInit {

  constructor() {

    super();
    setTimeout(() => {
      this.loading = false;
      console.log('mando false');
      
    }, 2000);

  }

  ngOnInit() {
    init_plugins();
  }

}
