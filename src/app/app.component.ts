import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hackathon-enabler';

  constructor(private router: Router, private employeeService: EmployeeService) {}

  ngOnInit() {
    if (!localStorage.getItem('loggedInEmployee')) {
      this.router.navigateByUrl('/login');
    } else if (localStorage.getItem('loggedInEmployee')) {
      this.employeeService.getEmployees().subscribe(employeesResponse => {
        const employees: any = employeesResponse;
        const loggedInEmployee = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loggedInEmployee'))));
        const employee = employees.filter((employee: Employee) => employee.id === loggedInEmployee.id && employee.name === loggedInEmployee.name)[0];
        if (employee) {
          this.router.navigateByUrl('/hackathons');
        } else {
          this.employeeService.logout();
        }
      })
    }
  }

}
