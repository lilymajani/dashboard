import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as L from 'leaflet'
import {PopupMarkerComponent} from "../popup-marker/popup-marker.component";
import {MarkerService} from "../../service/marker.service";
import {take} from "rxjs";
import {IMarker} from "../../model/marker.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  entryComponents: [PopupMarkerComponent]
})
export class MapComponent implements AfterViewInit {
  @ViewChild('viewContainerRef', { read: PopupMarkerComponent, static: true })
  public orderedViewContainer!: ViewContainerRef
  map: any

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  })

  markers: IMarker[] = [
    {
      "id": 1,
      "name": "Nantes Ynov Campus",
      "geolocation": {
        "latitude": 47.2173,
        "longitude": -1.5534
      }
    },
    {
      "id": 2,
      "name": "Théâtre Graslin",
      "geolocation": {
        "latitude": 47.21327209472656,
        "longitude": -1.5622235536575317
      }
    }
  ]


  constructor(
    private markerService: MarkerService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.createMap()
  }

  createMap() {

    const ynov = {
      lat: 47.2173,
      lng: -1.5534
    }

    const zoomLevel = 12

    this.map = L.map('map', {
      center: [ynov.lat, ynov.lng],
      zoom: zoomLevel
    })

    const mainLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { // LIGNE 20
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    })

    mainLayer.addTo(this.map)

    if (this.markers) {
      this.markers.forEach((marker: any) => {
        console.log('add : ', marker)
        this.addMarker(
          marker.geolocation,
          marker.name
          , false
        )
      })
    }


  }

  getAllMarker(): any {
    this.markerService
      .getJSON()
      .subscribe(data => {
        return data
      })
  }

  addMarker(geolocation: any, text: any, open: any) {
    const marker = L.marker([geolocation.latitude, geolocation.longitude], { icon: this.smallIcon })
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }

}
