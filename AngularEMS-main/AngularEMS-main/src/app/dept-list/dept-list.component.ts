import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  deptList!: Department[];
  constructor(private deptDervice: DepartmentService) { }

  ngOnInit(): void {
    this.deptDervice.getList().subscribe(list => {
        this.deptList = list;
        console.log(list);
    }, err =>  {
      console.log(err);
    })
  }

  delete(id: number) {
    if(confirm('Do you really want to delete?')) {
      console.log('deleting');
      this.deptDervice.delete(id).subscribe(result => {
        alert("Department deleted");
        this.ngOnInit();
      }, err => {
        console.log(err);
        alert('Delete failed');
      })
    }
  }

}
