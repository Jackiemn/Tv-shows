import { Component, OnInit, Output } from '@angular/core';
import { ITvShows } from '../itv-shows';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
@Output() tv: ITvShows
moviesServices: MoviesService
  constructor(private movieservice: MoviesService) {
this. tv = {
  Genre: 'Drama',
  name: 'Girls',
  Schedule: 10.00,
  day: 'Sundays',
  network: 'HBO',
  //image: 'string',
  image: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
 
} as ITvShows

}
  ngOnInit() {
    this.movieservice.getTvShows('Drama', 'Girls')
    .subscribe(data => this.tv = data)
  }
} 


