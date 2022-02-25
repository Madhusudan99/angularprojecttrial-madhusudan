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
  
  @Output() updateCartValue = new EventEmitter<string>();

  fireEvent20() {
    this.updateCartValue.emit("20");
  }

  fireEvent50() {
    this.updateCartValue.emit("50");
  }

}
