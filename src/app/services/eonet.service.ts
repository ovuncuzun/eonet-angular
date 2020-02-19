import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EonetRoot } from '../data/entities';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EonetService {
  private eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=50&days=365&status=open';
  private eonetURLClosed = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=50&days=365&status=closed'


  constructor(private http: HttpClient) { }

  getOpenEvents() {
    console.log("EonetService getEvents")
    return this.http.get(this.eonetURL)
      .pipe(
        map((data: EonetRoot) => {
          console.log(data)
          return data;
        }))
  }

  getClosedEvents() {
    return this.http.get(this.eonetURLClosed)
      .pipe(
        map((data: EonetRoot) => {
          console.log(data)
          return data;
        }))
  }
}
