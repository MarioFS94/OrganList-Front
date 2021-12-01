import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../models/product/product.interface";
import {ProductService} from "../../services/product.service";
import {ListInterface} from "../../models/list.interface";
import {ListService} from "../../services/list.service";
import {CategoryEnum} from "../../enums/category.enum";
import {ShopService} from "../../services/shop.service";
import {ShopInterface} from "../../models/shop.interface";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductInterface[] | undefined;
  lists: ListInterface[] | undefined;
  shops: ShopInterface[] | undefined;
  imageCategory: any | undefined;

  constructor(private productService: ProductService, private listService: ListService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      //this.calculateTotalPrice();
    });
    /*if (this.products.length === 0) {
      this.products = "No hay productos";
    } else {
      this.products = "Productos";
    }*/
    this.listService.getAllLists().subscribe(data => this.lists = data);

    this.shopService.getShops().subscribe(data => {
      this.shops = data;
      console.log(data[0].type);
    });
    this.imageCategory = Object.values(CategoryEnum.SUPERMERCADO);


  }

  /*private calculateTotalPrice() {

  }*/
}
