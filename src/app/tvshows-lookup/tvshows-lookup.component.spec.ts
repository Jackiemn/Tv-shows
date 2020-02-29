import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsLookupComponent } from './tvshows-lookup.component';

describe('TvshowsLookupComponent', () => {
  let component: TvshowsLookupComponent;
  let fixture: ComponentFixture<TvshowsLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
