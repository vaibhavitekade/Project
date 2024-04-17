import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
  }

  onSubmit() {
    this.authService.register(this.userForm.value as unknown as User).subscribe(result => {
      alert('User registered successfully');
      //navigate to login
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert(err);
    })
  }

}
