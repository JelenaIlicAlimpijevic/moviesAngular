import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

		private movies: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  	this.movies = [];
  	 this.movieService.getMovies()
        .subscribe((data: any[]) => {
          this.movies = data});

}
}