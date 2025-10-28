import { Component } from '@angular/core';
import { ListaPeliculas } from '../../lista-peliculas/lista-peliculas';
@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [ListaPeliculas],
   template: `
    <h2>Página de Ejercicios</h2>
    <app-lista-peliculas></app-lista-peliculas>
    
  `,
})
export class EjerciciosComponent {

}
