import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBackButton!: boolean;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (this.router.url == '/home') {
      this.showBackButton = false;
      console.log("showBackButton: ", this.showBackButton);
      console.log("this.router.url: ", this.router.url);

    }
  }

  back(): void {
    this.location.back()
  }

}
