import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.interface';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(newUser: UserInterface) {

    this.registerOK = true;
    this.router.navigate(['home']);

  }

}
