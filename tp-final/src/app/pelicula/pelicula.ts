import { Component, Input } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
@Component({
  selector: 'app-pelicula', //nombre del componente que se usara en app.html
  standalone: true,
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css'
})
export class PeliculaComponent {
  @Input() pelicula!: Pelicula; // Recibe un objeto pelicula desde el componente padre
 //operador ! le dice a TypeScript que la propiedad se inicializará más tarde y no es nula ni indefinida.
}
