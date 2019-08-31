import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/class/base.class';
import { MessagingService } from 'src/app/services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Base implements OnInit {

  message;

  constructor(
    private _messaginService: MessagingService
  ) {
    super();

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit () {
    init_plugins();
    this._messaginService.getPermission();
    this._messaginService.receiveMessage();
    this.message = this._messaginService.currentMessage;
    
  }
}
