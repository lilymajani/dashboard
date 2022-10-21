import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MapComponent} from "./component/map/map.component";
import {PopupMarkerComponent} from "./component/popup-marker/popup-marker.component";
import {MarkerManagementComponent} from "./component/marker-management/marker-management.component";



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: MapComponent
    },
    {
      path: 'dashboard',
      component: MapComponent
    },
    {
      path: 'marker-management',
      component: MarkerManagementComponent
    },
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
