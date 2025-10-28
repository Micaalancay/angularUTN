import { Component } from '@angular/core';
import { MovieListComponent } from '../../movies/movie-list/movie-list';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieListComponent],
 template: `<app-movie-list></app-movie-list>`,
})
export class MoviesComponent {

}
