import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module').then((m) => m.LoginRoutingModule),
  },
  {
    path: 'hackathons',
    loadChildren: () => import('./hackathons/hackathons-routing.module').then((m) => m.HackathonsRoutingModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
