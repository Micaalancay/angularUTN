import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  textoFooter: string = '© 2025 Mi Aplicación de Películas. Todos los derechos reservados.';
}
