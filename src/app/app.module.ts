import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from  '@angular/common/http';

import { LoginModule } from './login/login.module';
import { HackathonsModule } from './hackathons/hackathons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    HackathonsModule
  ],
  exports: [
    LoginModule,
    HackathonsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
