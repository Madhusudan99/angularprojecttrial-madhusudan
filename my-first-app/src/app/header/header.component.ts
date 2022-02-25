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

  itemsent = "laptop";
  secondItem = "mobile";

  @Input() getItemFromAppComponent: string[] = [];

  allEventsFired = ["-1"];
  appendEvent(eventName: string) {
    this.allEventsFired.push(eventName);
  }
}
