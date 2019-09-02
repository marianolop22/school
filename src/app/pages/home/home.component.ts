import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';

declare function init_plugins();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Base implements OnInit {

  message;

  constructor(
  ) {
    super();

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit () {
    init_plugins();
    
  }
}
