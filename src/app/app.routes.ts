import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path:"", component: HomeComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'home', component: HomeComponent },
    {path: '**', redirectTo: "home"},
];
