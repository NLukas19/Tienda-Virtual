import { Component, input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
}
