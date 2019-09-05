import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';
import { UserService, SchoolService } from 'src/app/services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Base implements OnInit {


  constructor(
    private _userService: UserService,
    private _schoolService: SchoolService
  ) {
    super();

    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this._userService.setUser('marianolop22@yahoo.com.ar');
    this._schoolService.setSchool ('V9uV3ZkLoQ4DzojgkiBL');

  }

  ngOnInit () {
    init_plugins();
  }
}
