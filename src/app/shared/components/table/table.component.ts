import { Component, ViewChild, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  public dataSource = new MatTableDataSource();
  public columnData: any;
  public displayedColumns: any;
  public selectedRow: any;
  @Input() initColumns: any[] = [];
  @Input() tableData = new BehaviorSubject<any[]>([]);
  @Input() selectRadio: any = 'select'
  @Input() uniqueCol: string = '';
  @Output() rowAction = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
    this.tableData.subscribe((employees: any) => {
      this.setTableDataSource(employees);
      this.columnData = employees;
    });
    this.displayedColumns = this.initColumns.map(col => col.columnName);
  }

  /**
   * @method
   * @description sets the records to the table data source
   */
  public setTableDataSource(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.setTableDataSource(this.columnData);
  }

  /**
   * @method applyFilter
   * @description filters the table based on searched text
   */
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * @method selectRow
   * @description gets the selected row from the table
   */
  public selectRow(row: any) {
    row.isSelected = true;
    this.selectedRow = row;
    this.dataSource.data.forEach((record: any) => {
      if (record[`${this.uniqueCol}`] !== row[`${this.uniqueCol}`]) {
        record.isSelected = false;
      }
    })
    this.rowAction.emit({ row, type: 'selection' });
  }

}
