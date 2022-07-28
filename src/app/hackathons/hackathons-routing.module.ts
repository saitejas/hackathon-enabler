import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHackathonsComponent } from './all-hackathons/all-hackathons.component';

const routes: Routes = [
  {
    path: '',
    component: AllHackathonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackathonsRoutingModule { }
