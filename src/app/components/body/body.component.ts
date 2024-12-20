import { Component } from '@angular/core';
import { Employee } from './employee/employee.module';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  employees: Employee[];
  searchInput: any;

  constructor() {
    this.employees = [
      { id: 44050, name: 'Vamshi Pentala', role: 'Software Developer', salary: 60000 },
      { id: 27050, name: 'Sappa Chandrashekar', role: 'Techinal Lead', salary: 80000 },
      { id: 12345, name: 'Srikanth Saini', role: 'DBA', salary: 55000 }
    ];
  }
  get filteredEmployees(): Employee[] {
    console.log(this.searchInput);
     // Check if this.searchInput is undefined or null before calling toString()
    const searchTerm = this.searchInput ? this.searchInput.toString().toLowerCase() : '#';
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm)
     );
   }
}
