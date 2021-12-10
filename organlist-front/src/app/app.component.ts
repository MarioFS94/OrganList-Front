import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { UserInterface } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBackButton!: boolean;
  loggedUser: UserInterface | undefined;
  
  constructor() { }

  ngOnInit(): void {

    let sessionUser = sessionStorage.getItem('loggedUser');
    
    if (sessionUser) {
      this.loggedUser = JSON.parse(sessionUser);  
    }
  
  }

  refresh(): void {
    window.location.reload();
  }

  logout() {
    sessionStorage.removeItem('loggedUser');
    this.refresh();
  }

}
