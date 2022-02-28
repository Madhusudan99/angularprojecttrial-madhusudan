import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatetimeService } from "./datetime.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getDate:any;
  arrayData:any;
  studentDetails:any;
  constructor(private dt: DatetimeService) {
    this.getDate = this.dt.today;
    this.arrayData = this.dt.getArrayData();
    this.studentDetails = this.dt.getStudentDetail();
  }
}


