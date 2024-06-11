import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './servicios/products.service';
import { ApiComponent } from './api/api.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ProductsService]
})
export class AppComponent {
  title = 'TiendaVirtual';
  private readonly productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();
}
