import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommsService, UserService } from 'src/app/services/service.index';
import { Subscription } from 'rxjs';

declare var $ :any;

@Component({
  selector: 'app-communications-notebook',
  templateUrl: './communications-notebook.component.html',
  styleUrls: ['./communications-notebook.component.css']
})
export class CommunicationsNotebookComponent implements OnInit, OnDestroy {


  public commsList: Array<any>;
  public subscription: Subscription;
  public studentList: Array<any>;

  constructor(
    public _commsService:CommsService,
    private _userService: UserService
  ) {

    console.log ( 'usuario', this._userService.user );
    this.subscription = this._commsService.getCommsList(this._userService.user.email,'escuelaid', 'studentid').subscribe (
      (response:Array<any>) => {
        this.commsList = response;

        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });

      }
    )
  }

  ngOnInit() {
    this._commsService.getStudentsAsociated ( 'marianolop22@yahoo.com.ar', 'escuela')
    .subscribe(
      (response:Array<any>) => {
        this.studentList = response;
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public markAsRead ( item:any ) {

    $('[data-toggle="tooltip"]').tooltip('hide');
    this._commsService.markCommAsRead( item.id)
      .then (
        response => {
          console.log ('actualizó', response);
        }
      );
  }

  show( item ) {
    console.log ('click', item);
  }

}
