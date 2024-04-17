import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  this.authService.login(this.userForm.value as unknown as User).subscribe(result => {
    alert('User log in successfull');
    //navigate to employees
    this.router.navigate(['/employees']);
  }, err => {
    console.log(err);
    alert("Invalid username or password");
  })
}

}
