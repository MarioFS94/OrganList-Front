import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private urlAPI = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.urlAPI);
  }
  getProductsByList(idList: string | null): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.urlAPI + '/lists/' + idList);
  }
  insertProduct(newProduct: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.urlAPI, newProduct);
  }
}
