import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
    
}
