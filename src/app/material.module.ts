import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
