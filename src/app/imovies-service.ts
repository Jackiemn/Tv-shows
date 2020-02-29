import { Observable } from 'rxjs';


export interface IMoviesService {
  //getMoviesService(Genre:string, name:string) : Observable<IMoviesService>
  Genre: string
  name: string
  Schedule: number
  day: string
  network: string
  image: string
}

// import { Time } from "@angular/common";

// export interface ITvShows {
//   Genre: string
//   name: string
//   Schedule: number
//   day: string
//   network: string
//   image: string
// }
