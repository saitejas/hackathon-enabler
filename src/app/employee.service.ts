import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { EventsStoreService } from './events-store.service';
import { Employee } from './models/employee.model';
import { Hackathon } from './models/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient, private router: Router, private eventsStore: EventsStoreService) { }

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

  getEmployee(): Employee {
    return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loggedInEmployee'))));
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

  canUpVote(challenge: Hackathon): boolean {
    const employee: Employee = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loggedInEmployee'))));
    if (employee) {
      if (challenge.votes.includes(employee.id)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  upVote(challenge: Hackathon): Hackathon {
    const employee: Employee = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loggedInEmployee'))));
    const hackathons: Hackathon[] = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('hackathons'))));
    if (employee && hackathons) {
      const challengeIndex = hackathons.findIndex((hackathon) => hackathon.title === challenge.title);
      if (!challenge.votes.includes(employee.id)) {
        hackathons[challengeIndex].votes.push(employee.id);
        localStorage.setItem('hackathons', JSON.stringify(hackathons));
        this.eventsStore.hackathonsUpdated.emit(true);
        return hackathons[challengeIndex];
      } else {
        const voteIndex = hackathons[challengeIndex].votes.findIndex((empID) => empID === employee.id);
        hackathons[challengeIndex].votes.splice(voteIndex, 1);
        localStorage.setItem('hackathons', JSON.stringify(hackathons));
        this.eventsStore.hackathonsUpdated.emit(true);
        return hackathons[challengeIndex];
      }
    }
    return challenge;
  }

  logout() {
    localStorage.removeItem('employees');
    localStorage.removeItem('loggedInEmployee');
    this.router.navigateByUrl('/login');
  }

}
