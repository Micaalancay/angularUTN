import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie'; // tu interfaz de la película

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
   { title: 'Inception', year: 2010, description: 'Un ladrón que roba secretos a través de sueños compartidos.', image: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg' },
  { title: 'The Matrix', year: 1999, description: 'Un hacker descubre la verdad sobre la realidad.', image: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg' },
  { title: 'Interstellar', year: 2014, description: 'Exploradores viajan a través de un agujero de gusano.', image: 'https://m.media-amazon.com/images/I/71n58YF0QPL._AC_SY679_.jpg' },
  { title: 'The Dark Knight', year: 2008, description: 'Batman lucha contra el Joker en Gotham.', image: 'https://m.media-amazon.com/images/I/51EbJjlA44L._AC_.jpg' },
  { title: 'Pulp Fiction', year: 1994, description: 'Historias entrelazadas de crimen en Los Ángeles.', image: 'https://m.media-amazon.com/images/I/51k0qaAxD3L._AC_.jpg' },
  { title: 'Fight Club', year: 1999, description: 'Un hombre insomne forma un club secreto de peleas.', image: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg' },
  { title: 'Forrest Gump', year: 1994, description: 'La vida extraordinaria de Forrest a través de décadas de historia.', image: 'https://m.media-amazon.com/images/I/41K8o3i2U9L._AC_.jpg' },
  { title: 'The Shawshank Redemption', year: 1994, description: 'Dos hombres forjan una amistad en prisión.', image: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg' },
  { title: 'Gladiator', year: 2000, description: 'Un general romano busca venganza contra el emperador corrupto.', image: 'https://m.media-amazon.com/images/I/51A5cHQhSqL._AC_.jpg' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, description: 'Un hobbit y sus amigos emprenden un viaje para destruir un anillo malvado.', image: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg' }

  ];

  constructor() { }

  // Método para retornar las películas
  getMovies(): Movie[] {
    return this.movies;
  }
}
