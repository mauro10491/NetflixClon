import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/id";
  apikey = "5edfff1f34bbb4446fbac663698c5ffd";

  bannerApiData():Observable<any>{

      return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }


} 
