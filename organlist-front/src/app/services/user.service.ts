import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserClass} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private urlAPI = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<UserClass[]> {
    return this.http.get<UserClass[]>(this.urlAPI + '/' + id);
  }

  getUserByEmail(email: string): Observable<UserClass> {
    return this.http.get<UserClass>(this.urlAPI + '?email=' + email);
  }

  updateUserData(newValues: UserClass): Observable<UserClass> {
    return this.http.put<UserClass>(this.urlAPI, newValues);
  }

  insertUser(newUser: UserClass): Observable<any>  {
    return this.http.post(this.urlAPI, newUser);
  }
}
