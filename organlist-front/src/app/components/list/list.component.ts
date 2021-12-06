import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {ProductService} from "../../services/product.service";
import {ListInterface} from "../../models/list.interface";
import {ListService} from "../../services/list.service";
import {CategoryEnum} from "../../enums/category.enum";
import {ShopService} from "../../services/shop.service";
import {ShopInterface} from "../../models/shop.interface";
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: ProductInterface[] | undefined;
  lists: ListInterface[] | undefined;
  shops: ShopInterface[] | undefined;
  imageCategory: any | undefined;
  showBackButton!: boolean;

  constructor(
    private productService: ProductService, 
    private listService: ListService, 
    private shopService: ShopService, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.router.url !== '/') {
      this.showBackButton = true;
      console.log("showBackButton: ", this.showBackButton);
      console.log("this.router.url: ", this.router.url);
      
    }
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      //this.calculateTotalPrice();
    });
    /*if (this.products.length === 0) {
      this.products = "No hay productos";
    } else {
      this.products = "Productos";
    }*/
    this.listService.getAllLists().subscribe(data => {
      this.lists = data;
console.log(data);
      this.shopService.getShops().subscribe(data => {
        this.shops = data;
        console.log(data[0].type);
      });
      //this.userService.getUserById()
    });


    this.imageCategory = Object.values(CategoryEnum.SUPERMERCADO);


  }

  /*private calculateTotalPrice() {

  }*/

}
