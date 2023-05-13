import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Employees } from './employees/emp.component';

@NgModule({
  declarations: [AppComponent, Login, NavbarComponent, Employees],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
