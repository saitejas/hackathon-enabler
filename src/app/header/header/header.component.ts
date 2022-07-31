import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loggedInEmployee'))));
  }

  logout() {
    this.employeeService.logout();
  }

}
