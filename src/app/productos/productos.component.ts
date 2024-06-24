import { Component, OnInit, inject, input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/products.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsComponent,CommonModule,FormsModule],
  templateUrl: '../productos/productos.component.html',
  styleUrl: '../productos/productos.component.scss',
  providers:[ProductsService]
})
export class ProductosComponent implements OnInit {
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)
  filteredData!: Product[]| null;
  searchData:string ='';
  
  ngOnInit(): void {
    this.getAllProducts()
   }

  getAllProducts(){
    this.products.getProducts().subscribe((res:ProducsArray)=>{
    this.data = res.results

    })
  }

  getFileteredPruducts(){
    this.filteredData = this.data.filter((product: Product)=>{
      
      return product.nombre_producto.includes(this.searchData)

    })
  }
}
