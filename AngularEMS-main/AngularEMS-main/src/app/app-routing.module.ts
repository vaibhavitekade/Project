import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateDeptComponent } from './update-dept/update-dept.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'departments', component: DeptListComponent},
  {path: 'departments/add', component: AddDepartmentComponent},
  {path: 'departments/update/:id', component: UpdateDeptComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/update/:id', component: UpdateEmpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
