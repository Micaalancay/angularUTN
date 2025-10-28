import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios';

export const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' }, // redirige a películas por defecto
  { path: 'pelis', component: MoviesComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: '**', redirectTo: 'pelis' } // ruta wildcard: si la URL no existe, redirige a películas
];
