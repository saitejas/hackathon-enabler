import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

declare const employees: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employeeId: string;

  password: string;

  errorMessage: string;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onFocus() {
    this.errorMessage = '';
  }

  async validate() {
    if (this.employeeId && this.employeeId !== '' && this.password && this.password !== '') {
      const validationResponse = await this.employeeService.validate(this.employeeId, this.password);
      if (validationResponse.status === 'success') {
        this.router.navigateByUrl('/hackathons');
      } else if (validationResponse.status === 'error') {
        this.errorMessage = validationResponse.message;
      }
    } else {
      this.errorMessage = 'Please make sure to provide employee ID and password to validate';
    }
  }

}
