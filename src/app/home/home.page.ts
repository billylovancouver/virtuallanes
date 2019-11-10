import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { PopoverController} from '@ionic/angular'
import { HomePopOverComponent } from '../home-pop-over/home-pop-over.component';

declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
    apiKey = 'AIzaSyB0o5F5_1HsPSSUaTIrICmeRkCl96_fobE';
    @ViewChild('map', {static: true }) googleMap;
    mapElement: any;
    map: any;
    mapOptions: any;
    mapCenter = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    infowindow: any;
    marker: any;
    newMarker: any;
    newMarkerOptions: any = {position: null, map: null, title: null};
  constructor( public popOverController: PopoverController, private geolocation: Geolocation) {
      const script = document.createElement('script');
      script.id = 'googleMap';
      if (this.apiKey) {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
      } else {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=';
      }
      document.head.appendChild(script);
      this.geolocation.getCurrentPosition().then((resp) => {
        this.mapCenter.lat = resp.coords.latitude;
        this.mapCenter.lng = resp.coords.longitude;
          // resp.coords.latitude
          // resp.coords.longitude
      }).catch((error) => {
          console.log('Error getting location', error);
      });

     
  }

  async presentPopover() {
    const popover = await this.popOverController.create({
      component:HomePopOverComponent,
      event
    });
    return await popover.present();
  }
  
  ngAfterViewInit(): void {
      this.mapElement = this.googleMap.nativeElement;
      this.mapOptions = {
          center: this.mapCenter,
          zoom: 8
      };

      

      setTimeout(() => {
          this.map = new google.maps.Map(this.mapElement, this.mapOptions);

         
           
          this.markerOptions.position = new google.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng);
          this.markerOptions.map = this.map;
          this.markerOptions.title = 'My Location';
          this.marker = new google.maps.Marker(this.markerOptions);
          
          //google.maps.event.addListener(window, 'load', this.infowindow.open(this.map, this.marker));
          //this.marker.addListener('click', this.infowindow.open(this.map, this.marker));
          this.marker.addListener('click', function() {
            alert('test');
            this.presentPopover();
          });

      }, 2000);

  }

  showNewMarker()
  {
    

    this.newMarkerOptions.position = new google.maps.LatLng(49.2172, -123.0396);
    this.newMarkerOptions.map = this.map;
    this.newMarkerOptions.title = 'New Marker';
    this.newMarker = new google.maps.Marker(this.newMarkerOptions);
   
  }

}
