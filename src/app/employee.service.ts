import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getEmployees() {
    return this.httpClient.get('assets/js/employees.js', { responseType: 'json' })
    .pipe(map(res => res));
  }

  setEmployees() {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem('employees')) {
        this.getEmployees().subscribe(employeesResponse => {
          localStorage.setItem('employees', JSON.stringify(employeesResponse));
          resolve('success');
        })
      } else {
        resolve('success');
      }
    })
  }

  async validate(employeeId: string, password: string): Promise<{status: string, message: string}> {
    await this.setEmployees();
    let employees: Employee[];
    let responseBody = {
      status: '',
      message: ''
    };
    if (localStorage.getItem('employees') && employeeId && password) {
      employees = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('employees'))));
      const employee: Employee = employees.filter((employee: Employee) => employee.id === employeeId)[0];
      if (employee) {
        if (employee.password === password) {
          responseBody.status = 'success';
          responseBody.message = 'Authentication successful';
          localStorage.setItem('loggedInEmployee', JSON.stringify(employee));
        } else {
          responseBody.status = 'error';
          responseBody.message = 'Invalid password';
        }
      } else {
        responseBody.status = 'error';
        responseBody.message = 'Employee not found';
      }
    } else {
      responseBody.status = 'error';
      responseBody.message = 'Error while authenticating. Please try again after sometime'
    }
    return responseBody;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
