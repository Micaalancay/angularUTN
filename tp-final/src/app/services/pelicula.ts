import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root', // ✅ Esto permite que sea inyectable en toda la app
})
export class PeliculaService {

  private peliculas: Pelicula[] = [
    { titulo: 'Inception', anio: 2010, genero: 'Ciencia Ficción', duracion: 148 },
    { titulo: 'The Matrix', anio: 1999, genero: 'Acción', duracion: 168 },
    { titulo: 'Interstellar', anio: 2014, genero: 'Aventura / Ciencia Ficción', duracion: 152 },
    { titulo: 'Gladiator', anio: 2000, genero: 'Drama / Histórico', duracion: 150 }
  ];

  constructor() {}

  // Método para obtener las películas
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }
}
