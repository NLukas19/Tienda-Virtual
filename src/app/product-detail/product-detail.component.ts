import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
 ngOnInit(): void {
   console.log(this.product)
 }
 @Input() product: Product | undefined
 @Output() close: EventEmitter<boolean>= new EventEmitter<boolean>();

closeButton(){
  this.close.emit(false)
}
}
