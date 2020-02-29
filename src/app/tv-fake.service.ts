import { Injectable } from '@angular/core';
import { IMoviesService } from './imovies-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvFakeService implements IMoviesService {
private fakeTv: IMoviesService = {
  Genre: 'Drama',
  name: 'Girls',
  Schedule: 09.00,
  day: 'Sundays',
  network: 'HBO',
  image: 'string'

}
  constructor() { }

  public getMovies(Genre: string, name: string):
  Observable<IMoviesService>{

    return of(this.fakeTv);
  }
}
