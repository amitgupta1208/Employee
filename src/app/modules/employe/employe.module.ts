import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeRoutingModule } from './employe-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { EmployeeComponent } from './compoments/employee/employee.component';

@NgModule({
  declarations: [CreateEditUserComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    SharedModule
  ],
  entryComponents: [CreateEditUserComponent]
})
export class EmployeModule { }
