import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule,
  MatRadioModule, MatSelectModule, ReactiveFormsModule, MatButtonModule,
  MatToolbarModule, MatTooltipModule, FormsModule
];

@NgModule({
  declarations: [TableComponent, SearchbarComponent],
  imports: MODULES,
  exports: [TableComponent, SearchbarComponent, ...MODULES]
})
export class SharedModule { }
