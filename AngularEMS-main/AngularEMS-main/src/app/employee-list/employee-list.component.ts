import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Gender } from '../models/gender';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empList!: Employee[];
  gender = Gender;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getList().subscribe(list => {
      console.log(list);
      this.empList = list;
    }, err => {
      console.log(err);
      alert(err);
    })
  }

  delete(id: number) {
    if(confirm('Do you really want to delete?')) {
      console.log('deleting');
      this.empService.delete(id).subscribe(result => {
        alert("Employee deleted");
        this.ngOnInit();
      }, err => {
        console.log(err);
        alert('Delete failed');
      })
    }
  }

}
