import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() productDescriptionEventEmiter = new EventEmitter<string>();

  pressedAddToCart() {
    this.productDescriptionEventEmiter.emit("add2Cart");
  }

}
