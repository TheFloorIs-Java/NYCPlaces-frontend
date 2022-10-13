import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../Model/Place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  PlaceList?: Place[];

  getAllPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>("http://localhost:8080/place");
  }

  getAPlace(id: Number): Observable<Place>{
    return this.http.get<Place>("http://localhost:8080/place/"+id);
  }

}
