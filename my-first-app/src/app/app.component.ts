import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatetimeService } from "./datetime.service";
import { UserInfoService } from './user-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getDate:any;
  arrayData:any;
  studentDetails:any;
  userData:any;
  constructor(private dt: DatetimeService, public uI: UserInfoService) {
    this.getDate = this.dt.today;
    this.arrayData = this.dt.getArrayData();
    this.studentDetails = this.dt.getStudentDetail();
  }

  user = {
    "email": "",
    "password": "",
    "city":"",
    "zip": "",
    "address1": "",
    "address2": "",
    "checkbox": "",

  };
  table:any=[]
  tableof="";
  sendTable() {
    console.log(this.tableof);

    for(let i=1;i<=10;i++)
    {
    this.table.push(i*Number(this.tableof));

    }
    
  }
  onSubmitOfForm(user:any) {
    // console.log(user)
    this.uI.user = user;




    
  }
}


