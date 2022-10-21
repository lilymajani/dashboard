import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private _jsonURL = 'assets/data/marker-data.json';

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe((data: any) => {
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
