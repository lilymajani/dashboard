import { Component, OnInit } from '@angular/core';
import {IMarker} from "../../model/marker.model";

@Component({
  selector: 'app-marker-management',
  templateUrl: './marker-management.component.html',
  styleUrls: ['./marker-management.component.css']
})
export class MarkerManagementComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource: IMarker[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
