import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api/api-service.service';
import { Movie } from '../movie/movie';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: Movie[];
  inputValue: string = 'Batman';
  constructor(private movieService: ApiService) { }

  onChange($event) {
    let id = setTimeout(() => {
      this.movieService.getMovies(this.inputValue).subscribe(result => {
        this.movies = result.Search;
      });
    }, 1000);
  }
  ngOnInit() {
    this.movieService.getMovies(this.inputValue).subscribe(result => {
      this.movies = result.Search;
    });

  }
}
