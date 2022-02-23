import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  counter = 0;
  incrementCounter() {
    this.counter++;
  }
  fullname = "";
  fetchName(){
    this.fullname = "John Doe";

  }

  imageUrl = ".././assets/images/download.jpg"
}
