import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommsService } from 'src/app/services/service.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public counter: number = 0;

  constructor(
    private _commsService: CommsService
  ) {

    this.subscription = this._commsService.getUnreadComms().subscribe (
      (response:Array<any>) => {
        this.counter = response.length;
      }
    )
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
