import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
   MyUsers = {
    firstname: 'shashi',
    lastName: 'kunal',
    company: 'TYSS',
    salary: 1000000,
    designation: 'node developer',
    city: 'mandya',
    gender: 'male',
  };
}
