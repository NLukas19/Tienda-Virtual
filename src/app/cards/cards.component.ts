import { CommonModule } from '@angular/common';
import { Component,inject,Input } from '@angular/core';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/products.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers:[ProductsService]
})
export class CardsComponent{
  closeModal() {
    this.individualProduct
 }
 @Input()list!: any;
 individualProduct: any; 
 productService= inject(ProductsService)

 
 
 getProduct(ev : number){
   this.productService.getIndividualProduct(ev).subscribe(res=>{
     this.individualProduct= res.results[0]
 
   }
   )
   
 }
 
}