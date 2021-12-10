import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductInterface[] | undefined;
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.products.forEach(product => {
        this.totalPrice += product.price;
      });
    });
    
  }

}
