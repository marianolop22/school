import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading:boolean = true;

  constructor() {

    // setTimeout(() => {
    //   this.loading = false;
    //   console.log('mando false');
      
    // }, 2000);

  }

  ngOnInit() {
    init_plugins();
  }

}
