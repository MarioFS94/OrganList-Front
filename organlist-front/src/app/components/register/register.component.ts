import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserClass } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReactive: FormGroup = new FormGroup({
    name: new FormControl(['', [Validators.required]]),
    email: new FormControl(['', [Validators.required, Validators.email]]),
    phone: new FormControl(['', [Validators.pattern("[0-9 ]{12}")]]),
    pass: new FormControl(['', [Validators.required, Validators.min(3)]]),
    pass2: new FormControl(['', [Validators.required, Validators.min(3)]])
  });
  registerOK: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  register(newValues: any) {

    let newUser = new UserClass();
    newUser.name = newValues.name;
    newUser.email = newValues.email;
    newUser.phone = newValues.phone;

    if (newValues.pass === newValues.pass2) {
      newUser.pass = newValues.pass;

      this.userService.insertUser(newUser).subscribe();

      this.registerOK = true;
    } else {
      this.formReactive.setErrors({ 'invalid': true });
    }

  }

}
