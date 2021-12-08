import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api-service.service';
import { MovieDetail } from 'src/app/movie/movie-detail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: MovieDetail;

  constructor(
    private movieService: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.movie = await this.movieService.getMovieDetails(this.activatedRoute.snapshot.params.id).toPromise();
  }

}
