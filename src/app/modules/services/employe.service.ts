import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Employee } from 'src/type-modals/employe.interface'

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  public employees: Employee[] = [
    {
      id: 1,
      employeeName: "Ramesh Kumar",
      salary: 40000,
      mobileNumber: 9807336547,
      status: true,
    },
    {
      id: 2,
      employeeName: "Abhishek Verma",
      salary: 10000,
      mobileNumber: 9807377547,
      status: false,
    },
    {
      id: 3,
      employeeName: "Aakash Singh",
      salary: 22000,
      mobileNumber: 9887336887,
      status: true,
    },
    {
      id: 4,
      employeeName: "Shalu Yadav",
      salary: 55000,
      mobileNumber: 7856756974,
      status: false,
    },
    {
      id: 5,
      employeeName: "Ritik Bisht",
      salary: 37000,
      mobileNumber: 9007515643,
      status: true,
    },
    {
      id: 6,
      employeeName: "Suraj Chamboli",
      salary: 16000,
      mobileNumber: 9876509098,
      status: true,
    },
    {
      id: 7,
      employeeName: "Kajal Rana",
      salary: 25000,
      mobileNumber: 8877661234,
      status: true,
    },
    {
      id: 8,
      employeeName: "Himanshu Chaddha",
      salary: 40000,
      mobileNumber: 9097856741,
      status: false,
    },
    {
      id: 9,
      employeeName: "Priyanka Chopra",
      salary: 65000,
      mobileNumber: 9988123786,
      status: true,
    },
    {
      id: 10,
      employeeName: "Abhilesh Agrahari",
      salary: 20000,
      mobileNumber: 8844129074,
      status: true,
    },
    {
      id: 11,
      employeeName: "Rahul Rajput",
      salary: 50000,
      mobileNumber: 9780967878,
      status: true,
    },
    {
      id: 12,
      employeeName: "Aatharv Gupta",
      salary: 30000,
      mobileNumber: 9977551234,
      status: false,
    },
    {
      id: 13,
      employeeName: "Bannu Rana",
      salary: 44000,
      mobileNumber: 6789564534,
      status: false,
    },
    {
      id: 14,
      employeeName: "Sonu Kamble",
      salary: 32000,
      mobileNumber: 6969125678,
      status: true,
    },
    {
      id: 15,
      employeeName: "Shivansh Bagri",
      salary: 15000,
      mobileNumber: 9888054715,
      status: true,
    },
    {
      id: 16,
      employeeName: "Arnav Choudhary",
      salary: 30000,
      mobileNumber: 6578910943,
      status: true,
    },
  ]

  public employeesSubject = new BehaviorSubject<Employee[]>(this.employees);
  constructor() { }

  /**
   * get All Employee Details
   */
  public getEmployees(): Observable<any> {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Employee) {
    employee.id = this.employees.length + 1 ;
    this.employees.push(employee);
    this.emitUpdates();
  }

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
      this.emitUpdates();
    }
  }

  // deleteEmployee(id: number) {
  //   this.employees = this.employees.filter(e => e.id !== id);
  //   this.emitUpdates();
  // }

  private emitUpdates() {
    this.employeesSubject.next(this.employees);
  }

 
}
