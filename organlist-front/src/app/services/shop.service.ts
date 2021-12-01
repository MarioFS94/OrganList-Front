import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShopInterface} from "../models/shop.interface";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private urlAPI = 'http://localhost:8080/shops';

  constructor(private http: HttpClient) { }

  getShops(): Observable<ShopInterface[]> {
    return this.http.get<ShopInterface[]>(this.urlAPI);
  }
}
