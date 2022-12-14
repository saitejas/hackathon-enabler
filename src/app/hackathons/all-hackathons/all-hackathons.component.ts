import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/employee.service';
import { EventsStoreService } from 'src/app/events-store.service';
import { Employee } from 'src/app/models/employee.model';
import { Hackathon } from 'src/app/models/hackathon.model';

@Component({
  selector: 'app-all-hackathons',
  templateUrl: './all-hackathons.component.html',
  styleUrls: ['./all-hackathons.component.scss']
})
export class AllHackathonsComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  hackathons: Hackathon[];

  origHackathons: Hackathon[];

  loggedInEmployee: Employee;

  p: number = 1;

  constructor(private snackBar: MatSnackBar, private employeeService: EmployeeService, private eventsStore: EventsStoreService) { 
    eventsStore.hackathonsUpdated.subscribe((event) => {
      this.getHackathonChallenges();
    })
  }

  ngOnInit() {
    this.getHackathonChallenges();
    this.loggedInEmployee = this.employeeService.getEmployee();
  }

  getHackathonChallenges(): void {
    this.hackathons = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('hackathons'))));
    this.origHackathons = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('hackathons'))));
  }

  addHackathon(hackathon: Hackathon): void {
    hackathon.votes = [];
    hackathon.created_at = Date.now();
    hackathon.created_by = this.loggedInEmployee.id;
    this.hackathons.push(hackathon);
    localStorage.setItem('hackathons', JSON.stringify(this.hackathons));
    this.sidenav.close();
    this.snackBar.open('Hackathon challenge has been added successfully!!!', 'Success', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }

  cancel(): void {
    this.sidenav.close();
  }

  addChallenge(challenge: Hackathon): void {

    if (!this.hackathons || this.hackathons && this.hackathons.length === 0) {
      this.hackathons = [];
      this.addHackathon(challenge);
    } else {
      if (!(this.hackathons.find((hackathon) => hackathon.title.toLowerCase() === challenge.title.toLowerCase()))) {
        this.addHackathon(challenge);
      } else {
        this.snackBar.open('An hackathon challenge with the title already exists. Please try with a different title', 'Error', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        });
      }
    }
  }

  sortByKey(sortValue: any) {
    const hackathonsCopy: any = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('hackathons'))));

    let key: string;

    if (sortValue.toLowerCase().includes('votes')) {
      key = 'votes';
    } else if (sortValue.toLowerCase().includes('oldest') || sortValue.toLowerCase().includes('newest')) {
      key = 'created_at';
    }

    return hackathonsCopy.sort(function(a: any, b: any)
    {
     var x = a[key]; var y = b[key];
     if (sortValue === 'votes-minmax' || sortValue === 'oldest') {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     } else {
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
     }
    });
   }

  sortHackathons(selectEvent: any) {
    this.hackathons = this.sortByKey(selectEvent.value);
  }

}
