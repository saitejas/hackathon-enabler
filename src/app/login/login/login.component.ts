import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

declare const employees: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employeesResponse => {
      console.log("employeesResponse : ", employeesResponse);
    })
  }

}
