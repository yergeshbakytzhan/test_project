import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Product } from 'src/model/product';
import { ProductService } from 'src/model/productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public products: Product[] = [];
  public headers: {title:string; key: number}[] = [];
  public checkbox!: FormControl;
  public filter: boolean = false;
  public key: number = 0;
  public filterValue: string = '';

  constructor(private productService: ProductService, private formBuilder: FormBuilder){
    this.checkbox = this.formBuilder.control(false)
  }

  public ngOnInit(): void {
    this.productService.getItems().subscribe(res=>{
      this.products = res.products.map((item: Product)=> item = this.productService.mapper(item))
      Object.keys(this.products[0]).forEach((item, index)=>{
        this.headers.push({title: item, key: index+1})
      })
      this.headers.pop()
    })
  }

  public filterTurn(key:number): void{
    this.filter = true
    this.key = key
  }


  public filterOff():void{
    this.filter = false
    this.key = 0
    this.filterValue = ''
  }

}
