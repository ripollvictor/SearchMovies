import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie/movie';
import { MovieDetail } from '../movie/movie-detail';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.omdbapi.com/?apikey=a1069bdd';

  constructor(private http:HttpClient) { }
  getMovies(name:string) {
    let url=`${this.apiURL}&s=${name}`;
    return this.http.get<ApiResponse>(url);
  }
  
  getMovieDetails(id:string) {
    let url=`${this.apiURL}&i=${id}`;
    return this.http.get<MovieDetail>(url);
  }
}

