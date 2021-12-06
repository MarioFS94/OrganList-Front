import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.urlAPI + '/' + id);
  }
  getUserByEmail(email: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.urlAPI + '/' + email);
  }
}
