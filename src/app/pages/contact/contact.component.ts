import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'googlemaps';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('map', {static:true}) mapElement: any;
  map: google.maps.Map;
  mark: google.maps.Marker;
  
  constructor() { }

  ngOnInit() {

    console.log ( this.mapElement);
    setTimeout(() => {
      const mapProperties = {
        center: new google.maps.LatLng(-34.661406, -58.676751),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      this.mark = new google.maps.Marker( { position: {lat: -34.661406, lng: -58.676751}, map:this.map  } );
    }, 500);
  }

}



//https://medium.com/@jkeung/integrating-google-maps-api-w-angular-7-e7672396ce2d