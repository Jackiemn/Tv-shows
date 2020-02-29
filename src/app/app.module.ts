import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { TVShowsSearchComponent } from "./tv-shows/tvshows-search.component";
import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import {MoviesService} from './movies.service'
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { from } from 'rxjs';
//import { TvshowsLookupComponent } from './tvshows-lookup/tvshows-lookup.component';

// @NgModule( 
//   declarations: {
//     AppComponent,
//     TvShowsComponent,
  
//   imports: 
//     BrowserModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     ReactiveFormsModule,
  
//   providers: [MoviesService],
//   bootstrap: [AppComponent]
// }),

@NgModule({
    declarations: [
      AppComponent,
      TvShowsComponent],
      //TvshowsLookupComponent],
      //TVShowsSearchComponent],
    
    imports:[
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule],
    
    providers: [MoviesService],
    bootstrap: [AppComponent]
  })

export class AppModule { }
