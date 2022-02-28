import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  today = new Date();


  getArrayData(){
    return [10,20,30];
  }

  getStudentDetail(){
    return {
      "id": "1",
      "Name": "John Doe",
      "Branch": "CSE",
    }
  }
}
