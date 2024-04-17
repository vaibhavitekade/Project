import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //http://localhost:4200/api/employees
  private apiUrl = environment.apiBaseUrl + 'employees';

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  
  constructor(private client: HttpClient) { }

  getList(): Observable<Employee[]> {
    return this.client.get<Employee[]>(this.apiUrl);
  }

  getById(id: number): Observable<Employee> {
    return this.client.get<Employee>(`${this.apiUrl}/${id}`);
  }

  add(emp: Employee): Observable<Employee> {
    return this.client.post<Employee>(this.apiUrl, emp, this.httpOptions);
  }

  update(emp: Employee): Observable<any> {
    return this.client.put<Employee>(`${this.apiUrl}/${emp.id}`, emp, this.httpOptions);
  }

  delete(id: number):Observable<any> {
    return this.client.delete<Employee>(`${this.apiUrl}/${id}`);
  }
}
