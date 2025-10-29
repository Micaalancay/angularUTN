import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, MovieItemComponent],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieListComponent implements OnInit {
 movies: Movie[] = [];
 movie: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
  onMovieSelected(movie: string): void {
    this.movie = movie;
  }
}
