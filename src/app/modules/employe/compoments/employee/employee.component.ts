import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeService } from 'src/app/modules/services/employe.service';
import { CreateEditUserComponent } from '../../create-edit-user/create-edit-user.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public columns = [
    { columnName: 'radio', displayName: '', icon: 'radio' },
    { columnName: 'employeeName', displayName: 'Employee Name', icon: 'none' },
    { columnName: 'salary', displayName: 'Salary', icon: 'none' },
    { columnName: 'mobileNumber', displayName: 'Mobile Number', icon: 'none' },
    { columnName: 'status', displayName: 'Status', icon: 'none' },
    { columnName: 'edit', displayName: '', icon: 'edit' },
  ];
  public employeeList = new BehaviorSubject<any[]>([]);
  public isLoader = false;
  
  constructor(private employeService: EmployeService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.isLoader = true;
    this.employeService.getEmployees();
    this.getEmployeeList();
  }

  /**
   * @method getEmployeeList
   * @description fetch the employee rist
   */
  public getEmployeeList() {
    this.employeService.employeesSubject.subscribe((resp: any[]) => {
      if (resp.length) {
        this.isLoader = false;
        this.employeeList.next(resp.map(employee => ({
          ...employee,
          status: employee.status ? 'Active' : 'Inactive'
        })));
      }
    });
  }
  
  /**
   * @method openAddEditDialog
   * @description opens the add/edit dialog
   */
  public openAddEditDialog(action: string, row = null) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = 'auto';
    dialogConfig.width = '400px';
    dialogConfig.data = action === 'edit' ? row : null;
    this.dialog.open(CreateEditUserComponent, dialogConfig);
  }

  /**
   * @method actionCalled
   * @description captures the action emitted from table
   */
  public actionCalled(event: any) {
    if (event.type === 'edit') {
      this.openAddEditDialog(event.type, event.row);
    }
  }
}
