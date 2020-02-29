import { Component, OnInit } from '@angular/core';
import { ITvShows } from '../itv-shows';
import { MoviesService } from '../movies.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-tvShows-search',
  templateUrl: './tvShows-search.component.html',
  styleUrls: ['./tvShows-search.component.css']
})
export class TVShowsSearchComponent implements OnInit {
 tv: ITvShows
 search = new FormControl();
   constructor(private moviesService: MoviesService) {

   }


  ngOnInit() {
    this.moviesService.TvShows('Drama','Girls')
  }

}
