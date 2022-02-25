import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  eventsFired = ["-1"];

  @Output() descriptionSectionEventEmiter = new EventEmitter<string>();
  addEvent(newEvent:string) {
    this.eventsFired.push(newEvent);
    this.descriptionSectionEventEmiter.emit("add2Cart");

  }

}
