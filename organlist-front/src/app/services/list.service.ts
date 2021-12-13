import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListClass} from "../models/list";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private urlAPI = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) { }

  getAllLists(): Observable<ListClass[]> {
    return this.http.get<ListClass[]>(this.urlAPI);
  }

  updateFavoriteList(listId:number): Observable<ListClass[]> {
    return this.http.patch<ListClass[]>(this.urlAPI + "/favorite?listId=" + listId, undefined);
  }
  insertList(list: ListClass): Observable<ListClass> {
      return this.http.post<ListClass>(this.urlAPI, list);
  }
  getFavoriteLists(userId:number): Observable<ListClass[]> {
    return this.http.get<ListClass[]>(this.urlAPI + "/favorite?userId=" + userId);
  }
  deleteList(listId: number): Observable<ListClass[]> {
    return this.http.delete<ListClass[]>(this.urlAPI + '?listId=' + listId);
  }
}
