import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBackButton!: boolean;
  loggedUser: UserClass | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {

    let sessionUser = sessionStorage.getItem('loggedUser');
    
    if (sessionUser) {
      this.loggedUser = JSON.parse(sessionUser);  
    }
  
  }

  refresh(): void {
    window.location.reload();
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
  }

  logout() {
    sessionStorage.removeItem('loggedUser');
    this.refresh();
    this.redirectTo('/home');
  }

}
