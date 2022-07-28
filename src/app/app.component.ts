import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hackathon-enabler';

  constructor(private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('Auth') && !localStorage.getItem('loggedInEmployee')) {
      this.router.navigateByUrl('/login');
    }
  }

}
