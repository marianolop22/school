import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HtmlInjectService {

  constructor() { }


  public buildMapsScript(): HTMLScriptElement {
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsKey}`;
    return (script);
  }

  // public buildFirebaseScript(): HTMLScriptElement {
  //   var script = document.createElement("script");
  //   script.type = 'text/javascript';
  //   script.text = `
  //     var firebaseConfig = {
  //       apiKey: "${environment.apiKey}",
  //       authDomain: "${environment.authDomain}",
  //       databaseURL: "${environment.databaseURL}",
  //       projectId: "${environment.projectId}",
  //       storageBucket: "${environment.storageBucket}",
  //       messagingSenderId: "${environment.messagingSenderId}",
  //       appId: "${environment.appId}"        
  //     };
  //     firebase.initializeApp(firebaseConfig);`;
  //   return (script);
  // }


}
