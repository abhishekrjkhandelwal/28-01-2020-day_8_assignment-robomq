import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  eID = '';
  eNAME = '';
  eSALARY = '';
  eDEPARTMENT = '';
@Output() employeeCreated = new EventEmitter();
  addEmployee() {
    const employee = {
      ID: this.eID,
      NAME: this.eNAME,
      SALARY: this.eSALARY,
      DEPARTMENT: this.eDEPARTMENT
    };
    this.employeeCreated.emit(employee);
   }
   constructor() { }
  ngOnInit() {
  }

}
