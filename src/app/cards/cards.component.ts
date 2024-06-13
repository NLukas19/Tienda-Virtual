import { Component, input,inject, OnInit } from '@angular/core';
import { ProductsService } from '../servicios/products.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers:[ProductsService]
})
export class CardsComponent implements OnInit{
  products$: any;
  ngOnInit(): void {
    this.productsSvc.getAllProducts().subscribe((response: any)=>{ this.products$=response});
  }
  private readonly productsSvc = inject(ProductsService);
}