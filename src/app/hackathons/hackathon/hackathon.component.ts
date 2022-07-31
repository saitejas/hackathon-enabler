import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { EventsStoreService } from 'src/app/events-store.service';
import { Employee } from 'src/app/models/employee.model';
import { Hackathon } from 'src/app/models/hackathon.model';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss']
})
export class HackathonComponent implements OnInit {

  @Input() hackathon: Hackathon;

  loggedInEmployee: Employee;

  showUpVote: boolean;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loggedInEmployee = this.employeeService.getEmployee();
    this.showUpVote = this.hackathon.created_by !== this.loggedInEmployee.id;
  }

  canUpVote(): boolean {
    return this.employeeService.canUpVote(this.hackathon);
  }

  upVote() {
    this.hackathon = this.employeeService.upVote(this.hackathon);
  }

}
