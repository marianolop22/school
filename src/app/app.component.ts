import { Component } from '@angular/core';
import { HtmlInjectService, SchoolService } from './services/service.index';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuEscuela';
  
  constructor (
    private _htmlInject: HtmlInjectService,
    private _school: SchoolService
    ) {
      document.body.appendChild( this._htmlInject.buildMapsScript() );
      // document.body.appendChild( this._htmlInject.buildFirebaseScript() );

      console.log (window.location.host);
      this.getIdSchool();

    }

  async getIdSchool () {
    let response = await this._school.getIdSchool ();
    console.log ( 'config',response);
  }
    
}
