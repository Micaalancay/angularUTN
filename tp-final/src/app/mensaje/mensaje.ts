import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [NgIf],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css'
})


export class Mensaje { // Componente Mensaje

  mensaje1: string = "Hola Mundo";
  mensaje2: string = "Este mensaje puede ocultarse con *ngIf";
  mostrar: boolean = false;

}
