import { Component } from '@angular/core';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class Employees {
  employeesObject = [
    {
      emp_id: 'TYP1',
      emp_name: 'manu',
      emp_salary: 100000,
      emp_designation: 'node developer',
      emp_gender: 'male',
      emp_exp: '4years',
      emp_edu: 'BE',
    },
    {
      emp_id: 'TYP2',
      emp_name: 'nisha',
      emp_salary: 10000,
      emp_designation: 'java developer',
      emp_gender: 'female',
      emp_exp: '2years',
      emp_edu: 'BE',
    },
    {
      emp_id: 'TYP3',
      emp_name: 'usha',
      emp_salary: 10000,
      emp_designation: 'html developer',
      emp_gender: 'female',
      emp_exp: '4years',
      emp_edu: 'BTECH',
    },
    {
      emp_id: 'TYP4',
      emp_name: 'shashi',
      emp_salary: 10000,
      emp_designation: 'fullstack developer',
      emp_gender: 'male',
      emp_exp: '12years',
      emp_edu: 'BE',
    },
  ];
}
