import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculaService } from '../services/pelicula';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [NgFor, PeliculaComponent],
  templateUrl: './lista-peliculas.html',
  styleUrls: ['./lista-peliculas.css']
})
export class ListaPeliculas implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculas = this.peliculaService.getPeliculas();
  }
}

