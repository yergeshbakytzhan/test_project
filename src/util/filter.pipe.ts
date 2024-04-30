import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/model/product";


@Pipe({
    name: 'customFilter'
})
export class FilterPipe implements PipeTransform {
    
    
    transform(value: Product[], searchString?: string) {
        if (!searchString) {
            return value
        }
        return value.filter((val: Product) => 
            val.brand.toLowerCase().includes(searchString.toLowerCase()) ||
            val.price === +searchString ||
            val.stock === +searchString ||
            val.title.toLowerCase().includes(searchString.toLowerCase())
        );
    }

  
}