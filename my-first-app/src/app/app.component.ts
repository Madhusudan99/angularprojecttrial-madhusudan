import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 2 Way Data binding
  fname = "James";
  lname = "Moris";

  gnumber = 4;
  
  evenOdd() {
    if (this.gnumber%2 == 0) {
      return true;
    }
    return false;
  }
  
  numArrs = [10,20,30,40];
  strArrs = ["aman", "raman", "suman"];
  names = ["aman", "Abraham", "raman", "Jonathan", "suman", "Radhakrishnan"];
  counter = 0;

  sendItemToHeaderComponent: string[] = ["Watch", "iPhone", "TV", "Microwave"];
}
