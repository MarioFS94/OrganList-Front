import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {ProductService} from "../../services/product.service";
import {ListInterface} from "../../models/list.interface";
import {ListService} from "../../services/list.service";
import {CategoryEnum} from "../../enums/category.enum";
import {ShopService} from "../../services/shop.service";
import {ShopInterface} from "../../models/shop.interface";

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

  constructor(
    private productService: ProductService, 
    private listService: ListService, 
    private shopService: ShopService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
    
    this.listService.getAllLists().subscribe(data => {
      this.lists = data;

      this.shopService.getShops().subscribe(data => {
        this.shops = data;
      });
    
    });

    this.imageCategory = Object.values(CategoryEnum.SUPERMERCADO);

  }
  updateFavoriteList(listId:string){
    this.listService.updateFavoriteList(listId).subscribe(
      data => this.lists = data
    );
  }

}
