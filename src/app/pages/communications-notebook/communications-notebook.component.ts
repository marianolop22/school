import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommsService } from 'src/app/services/service.index';
import { Observable, Subscription } from 'rxjs';

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

  
  
    this.subscription = this._commsService.getCommsList().subscribe (
      (response:Array<any>) => {
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

  public show () {

    this.commsList[0].sent.seconds
    console.log ( new Date ( this.commsList[0].sent.seconds * 1000    ))
  }

}
