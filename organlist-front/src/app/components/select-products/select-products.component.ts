import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {
  products: ProductInterface[] = [];
  result: string[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      //this.products = data;

      data.forEach((item)=>{
        //pushes only unique element
          if(!this.result.includes(item.name)){
            this.products.push(item);
            this.result.push(item.name);
        }
      })
      
      console.log(this.products);
    });
  }
  addProductToList(productId: string) {

  }


}
