import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListClass } from 'src/app/models/list';
import { ListService } from 'src/app/services/list.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  formReactive!: FormGroup;
  enableCreateBtn: boolean = false;
  loggedUser: any;
  userName!: string;
  shops: any;
  created: boolean = false;

  constructor(private listService: ListService, private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem('loggedUser');

    if (sessionUser) {
      this.loggedUser = JSON.parse(sessionUser);

      this.formReactive = new FormGroup({
        name: new FormControl(['', [Validators.required]]),
        description: new FormControl(''),
        shop: new FormControl(''),
        user: new FormControl(this.loggedUser.name)
      });
    }
    this.shopService.getShops().subscribe(data => this.shops = data);
  }

  createList(newList: ListClass) {

    let realList: ListClass = new ListClass();
    
    realList.name = newList.name;
    realList.description = newList.description;
    realList.user = this.loggedUser;

    this.listService.insertList(realList).subscribe();
    
    this.created = true;
    //this.router.navigate(['home']);

  }

}
