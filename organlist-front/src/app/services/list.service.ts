import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListInterface} from "../models/list.interface";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private urlAPI = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) { }

  getAllLists(): Observable<ListInterface[]> {
    return this.http.get<ListInterface[]>(this.urlAPI);
  }
}
