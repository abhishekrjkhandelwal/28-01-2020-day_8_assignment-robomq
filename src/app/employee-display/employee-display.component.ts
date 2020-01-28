import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']

})

export class EmployeeDisplayComponent implements OnInit {

  @Input() employees = [];
  constructor() { }

  ngOnInit() {
  }

}
