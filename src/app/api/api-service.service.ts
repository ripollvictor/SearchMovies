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
  
  apiURL = 'http://www.omdbapi.com/?apikey=a1069bdd';

  constructor(private http:HttpClient) { }

  getMovies(name:string) {
    return this.http.get<ApiResponse>(`${this.apiURL}&s=${name}`);
  }
  
  getMovieDetails(id:string) {
    return this.http.get<MovieDetail>(`${this.apiURL}&i=${id}`);
  }
}

