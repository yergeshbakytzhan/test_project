import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";

@Injectable({providedIn: 'root'})
export class ProductService {

    constructor(private http: HttpClient){

    }


    public getItems(){
        return this.http.get<any>("https://dummyjson.com/products")
    }

    public mapper(product: Product): Product{
        return {
            brand: product.brand,
            stock: product.stock,
            title: product.title,
            price: product.price,
            available: product.stock > 50 ? true : false
        }
    }
}