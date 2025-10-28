import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],  // opcional si vas a usar ngIf/ngFor
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class Child {// Componente hijo
  @Input() message: string = 'Hola desde el hijo'; // Valor por defecto
}
