// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TvShowsComponent } from './tv-shows.component';
// import { MoviesService } from '../movies.service';

// describe('TvShowsComponent', () => {
//   let component: TvShowsComponent;
//   let fixture: ComponentFixture<TvShowsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [ TvShowsComponent ]
//       providers:[{provide: MoviesService, useClass:TvFakeService}]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TvShowsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowsComponent } from './tv-shows.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import {
//   MatButtonModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule
// } from "@angular/material";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
describe('TVShowSearchComponent', () => {
  let component: TvShowsComponent;
  let fixture: ComponentFixture<TvShowsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ TvShowsComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});