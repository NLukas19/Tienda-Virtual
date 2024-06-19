import { Component, OnInit, inject, input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProducsArray, Product } from '../interfaces/productos';
import { ProductsService } from '../servicios/products.service';
import { Users } from '../interfaces/users.interface';
import { UsersService } from '../servicios/users.service';
import { DolarService } from '../servicios/dolar.service';
import { DolarInterface } from '../interfaces/dolar.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsComponent,CommonModule,FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent implements OnInit {
  data!: Product[];
  loader:boolean =false
  products= inject(ProductsService)
  filteredData!: Product[]| null;
  searchData:string ='';
  constructor(private dolarService: DolarService, 
    private users: UsersService){
    
  }
  
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
