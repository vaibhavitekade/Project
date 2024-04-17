import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddDepartmentComponent } from './add-department/add-department.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDeptComponent } from './update-dept/update-dept.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './services/jwt.interceptor';
 
@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    EmployeeListComponent,
    AddDepartmentComponent,
    UpdateDeptComponent,
    AddEmployeeComponent,
    UpdateEmpComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
