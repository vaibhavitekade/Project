import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { Gender } from '../models/gender';
import { DepartmentService } from '../services/department.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  deptList!: Department[];
  empForm!: FormGroup;
  gender = Gender;
  
  constructor(private deptService: DepartmentService,
      private empService: EmployeeService,
      private router: Router) { }

  ngOnInit(): void {
    this.deptService.getList().subscribe(list => {
      this.deptList = list;
      console.log(list);
    }, err =>  {
      console.log(err);
    });

    this.empForm = new FormGroup({
      name: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      gender: new FormControl(null, Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobileNo: new FormControl("", [Validators.required]),
      departmentId: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    this.empService.add(this.empForm.value as unknown as Employee).subscribe(result => {
      alert('Employee submitted successfully');
      //redirect to emp List
      this.router.navigate(['/employees']);
    }, err => {
      console.log(err);
      alert(err);
    })
  }

  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }

}
