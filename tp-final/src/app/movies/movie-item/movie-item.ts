import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { NgIf }  from '@angular/common';
@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})
export class MovieItemComponent {
  @Input() movie!: Movie; // ! indica que esta propiedad será inicializada por el componente padre
  @Output() movieSelected = new EventEmitter<string>(); //EventEmitter para notificar al componente padre cuando se selecciona una película

  selectMovie() {
    this.movieSelected.emit(this.movie.title); //Emite el título de la película seleccionada
  }

}
