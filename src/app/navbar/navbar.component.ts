import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  usuarios= [
    "juan",
    "pedro",
    "gabi"
  ]

  nombre: string = "hola";

  card= {
    titulo: "Prueba",
    descripcion: "Bienvenido a la prueba del card"

  }
  

}
