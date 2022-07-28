import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonsRoutingModule } from './hackathons-routing.module';
import { AllHackathonsComponent } from './all-hackathons/all-hackathons.component';
import { HackathonComponent } from './hackathon/hackathon.component';


@NgModule({
  declarations: [
    AllHackathonsComponent,
    HackathonComponent
  ],
  imports: [
    CommonModule,
    HackathonsRoutingModule
  ]
})
export class HackathonsModule { }
