import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter= 0;
  allEvents = ["-1"];
  incrementCounter(commingEvent:string) {
    this.allEvents.push(commingEvent);
    if (commingEvent == "add2Cart") {
      this.counter++;
    }
  }
  
}
