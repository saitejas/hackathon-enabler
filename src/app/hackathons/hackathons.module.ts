import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonsRoutingModule } from './hackathons-routing.module';
import { AllHackathonsComponent } from './all-hackathons/all-hackathons.component';
import { HackathonComponent } from './hackathon/hackathon.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HeaderModule } from '../header/header.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddHackathonComponent } from './add-hackathon/add-hackathon.component';


@NgModule({
  declarations: [
    AllHackathonsComponent,
    HackathonComponent,
    AddHackathonComponent
  ],
  imports: [
    CommonModule,
    HackathonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderModule,
    NgxPaginationModule
  ]
})
export class HackathonsModule { }
