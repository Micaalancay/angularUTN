import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  textoFooter: string = '© 2025 Micaela Alancay. Todos los derechos reservados.';
}
