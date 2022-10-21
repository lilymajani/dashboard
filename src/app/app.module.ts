import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { PopupMarkerComponent } from './component/popup-marker/popup-marker.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MarkerService} from "./service/marker.service";
import {HttpClientModule} from "@angular/common/http";
import { MarkerManagementComponent } from './component/marker-management/marker-management.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PopupMarkerComponent,
    SidenavComponent,
    MarkerManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
