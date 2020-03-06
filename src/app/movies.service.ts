import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITvshosData } from './itvshows-data';
import { environment } from 'src/environments/environment';
import { ITvShows } from './itv-shows';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  TvShows(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) { }

getTvShows(genre:string, name:string):Observable<ITvShows>{
    return this.httpClient.get<ITvshosData>( `${environment.baseUrl}
    api.tvmaze.com/shows?q=${genre},${name}&appid=${environment.appId}`
   ).pipe(map(data => this.transformToITvShows(data)))
   ;
  }

private transformToITvShows(data:ITvshosData) : ITvShows{
  return{
    Genre: data.Drama,
    name: data.Drama,
    Schedule: data.Drama,
    day: data.Drama,
    network: data.Drama,
    image: `https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg/${data.Drama}`,



  }
    
    
    
   

}

}