import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ProducsArray, Product } from '../interfaces/productos';

Injectable({providedIn: 'root'})
export class ProductsService{ 
    _http= inject(HttpClient)
    urlBase = "https://fakestoreapi.com";
    
    getProducts():Observable<ProducsArray>{
     return this._http.get<ProducsArray>(`${this.urlBase}/products`)
    }
    
    getIndividualProduct(id: number): Observable<ProducsArray>{
      return this._http.get<ProducsArray>(`${this.urlBase}/products/${id}`)
    }
    getPrductsByName(name: string){
       return this._http.get(`${this.urlBase}/products?title=${name}`)
    }
    
}