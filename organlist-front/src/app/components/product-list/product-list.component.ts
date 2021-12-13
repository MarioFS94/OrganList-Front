import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from "../../models/product.interface";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductInterface[] | undefined;
  idList!: string | null;
  totalPrice: number = 0;
  greatLength: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idList = this.route.snapshot.paramMap.get('idList');
    this.productService.getProductsByList(this.idList).subscribe(
      data => {
        this.products = data;
        this.greatLength = this.products.length < 1;
        this.products.forEach(product => {
          this.totalPrice += product.price;
        });
      });

  }

}
