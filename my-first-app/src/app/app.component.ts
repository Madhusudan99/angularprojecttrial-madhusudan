import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  totalQuantity  = 0;
  billAmount  = 0;
  cartItems = [
    {
      "id": "",
      "name": "",
      "price": "",
      "quantity": "",
      "location": "",
      "url": "",

    },
  ];

  addItemToCart(product: any) {
    this.cartItems.push(product);
    this.counter++;
    this.totalQuantity += Number(product.quantity);
    this.billAmount += Number(product.quantity) * Number(product.price);
  }
}


