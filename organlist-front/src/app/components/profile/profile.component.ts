import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListClass } from 'src/app/models/list';
import { UserClass } from 'src/app/models/user';
import { ListService } from 'src/app/services/list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser!: UserClass;
  favoriteLists!: ListClass[];

  formReactive!: FormGroup;
  showEdit: boolean = false;
  showMessage: boolean = false;
  isAdmin: boolean = false;
  allLists!: ListClass[];
  greatLenghtFav: boolean = false;
  greatLenghtAll: boolean = false;


  constructor(private listService: ListService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem('loggedUser');

    if (sessionUser) {
      this.loggedUser = JSON.parse(sessionUser);
    }

    if (this.loggedUser?.role === 'ADMIN') {
      this.isAdmin = true;
      this.listService.getAllLists().subscribe(data => {
        this.allLists = data;
        this.greatLenghtAll = this.allLists.length === 0;
      });
    }

    this.formReactive = new FormGroup({
      name: new FormControl([this.loggedUser?.name, [Validators.required]]),
      email: new FormControl([this.loggedUser?.email, [Validators.required, Validators.email]]),
      phone: new FormControl([this.loggedUser?.phone, [Validators.pattern("[0-9 ]{12}")]]),
      pass: new FormControl([this.loggedUser?.pass, [Validators.required, Validators.min(3)]]),
      pass2: new FormControl([this.loggedUser?.pass, [Validators.required, Validators.min(3)]])
    });

    if (this.loggedUser?.id) {
      this.listService.getFavoriteLists(Number(this.loggedUser.id)).subscribe(data => {
        this.favoriteLists = data;
        this.greatLenghtFav = this.favoriteLists.length === 0;
      });
    }
  }

  updateUserData(newValues: any) {

    let newUser = new UserClass();
    newUser.id = this.loggedUser.id;
    newUser.name = newValues.name;
    newUser.email = newValues.email;
    newUser.phone = newValues.phone;

    if (newValues.pass === newValues.pass2) {
      newUser.pass = newValues.pass;

      this.userService.updateUserData(newUser).subscribe();

      sessionStorage.setItem('loggedUser', JSON.stringify(newUser));

      this.redirectTo('/profile');
    } else {
      this.formReactive.setErrors({ 'invalid': true });
    }

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
  }

  deleteList(listId: number){
    this.listService.deleteList(listId).subscribe((data: ListClass[]) => this.allLists = data);
  }

}
