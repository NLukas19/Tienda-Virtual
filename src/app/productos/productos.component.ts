import { Component, input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
}
