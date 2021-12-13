import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formReactive!: FormGroup;
  formError: boolean = false;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formReactive = new FormGroup({
      email: new FormControl([ '', [Validators.required, Validators.email]]),
      pass: new FormControl([ '', [Validators.required, Validators.min(3)]])
    });
  }

  login(email: string) {
    if (email) {
      this.userService.getUserByEmail(email).subscribe(data => {
        if (data || data==null) {
          this.formError = true;
        }
        if (data?.pass === this.formReactive.get('pass')?.value) {
          console.log("LOGGED");
  
          sessionStorage.setItem('loggedUser', JSON.stringify(data));
  
          this.refresh();
          this.router.navigate(['/home']);
        } 
      });
    } else {
      this.formError = true;
    }
  }

  refresh(): void {
    window.location.reload();
  }

}
