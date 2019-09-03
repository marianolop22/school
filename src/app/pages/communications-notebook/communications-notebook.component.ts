import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommsService } from 'src/app/services/service.index';
import { Observable, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-communications-notebook',
  templateUrl: './communications-notebook.component.html',
  styleUrls: ['./communications-notebook.component.css']
})
export class CommunicationsNotebookComponent implements OnInit, OnDestroy {


  commsList: Array<any>;
  subscription: Subscription;



  constructor(
    public _commsService:CommsService
  ) {

  
  
    this.subscription = this._commsService.getMyComms().subscribe (
      (response:Array<any>) => {
        //console.log (response);
        console.log (response);
        this.commsList = response;
      }
    )
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public show ( item:any) {

    item.read = 1;


  }

}
