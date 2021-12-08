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

  async onChange($event) {
    this.movies = (await this.movieService.getMovies(this.inputValue).toPromise()).Search;
  }
  async ngOnInit() {
    this.movies = (await this.movieService.getMovies(this.inputValue).toPromise()).Search;
  }
}
