import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';

  private scriptTag: HTMLScriptElement;
  private key = 'AIzaSyAE-70gYGN_ypxam5bOwQbq4MYVXMX2z8Y';

  constructor () {
    this.scriptTag = this.buildScriptTag();
    document.body.appendChild( this.scriptTag );
  }

  private buildScriptTag(): HTMLScriptElement {

    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.key}`;
    return (script);
  }


}
