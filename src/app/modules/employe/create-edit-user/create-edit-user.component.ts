import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from 'src/type-modals/employe.interface';
import { EmployeService } from '../../services/employe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {

  public employeeForm!: FormGroup;
  private phoneNumberPattern = "^([{2,3})?([6-9][0-9]{9})$";

  constructor(public dialogRef: MatDialogRef<CreateEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    public employeService: EmployeService, public fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeName: [this.data?.employeeName || '', [
        Validators.required,
        Validators.minLength(3)
      ]],
      salary: [this.data?.salary || '', [
        Validators.required,
        Validators.pattern(/^\d+$/),
        Validators.min(0)
      ]],
      mobileNumber: [this.data?.mobileNumber || '', [
        Validators.required,
        Validators.pattern(this.phoneNumberPattern)
      ]],
      status: [this.data?.status || 'Active', [
        Validators.required,
      ]],
    });
  }

  /**
   * @method onCancel
   * @description closes the add/edit dialog
   */
  public onCancel(): void {
    this.dialogRef.close();
  }

  /**
   * @method onSubmit
   * @description submits the form to save the employee details
   */
  public onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;

      if (this.data) {
        formData.id = this.data.id;
        this.employeService.updateEmployee(formData);
      } else {
        this.employeService.addEmployee(formData);
      }

      this.dialogRef.close(formData);
    }
  }
}
