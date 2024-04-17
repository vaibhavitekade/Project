import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  //http://localhost:4200/api/departments
  private apiUrl = environment.apiBaseUrl + 'departments';

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(private client: HttpClient) { }

  getList(): Observable<Department[]> {
    return this.client.get<Department[]>(this.apiUrl);
  }

  getById(id: number): Observable<Department> {
    return this.client.get<Department>(`${this.apiUrl}/${id}`);
  }

  add(dept: Department): Observable<Department> {
    return this.client.post<Department>(this.apiUrl, dept, this.httpOptions);
  }

  update(dept: Department): Observable<any> {
    return this.client.put<Department>(`${this.apiUrl}/${dept.id}`, dept, this.httpOptions);
  }

  delete(id: number):Observable<any> {
    return this.client.delete<Department>(`${this.apiUrl}/${id}`);
  }
}
