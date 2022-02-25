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
  
  products = [
    {
      "id": 1,
      "name": "Rice",
      "price": "12",
      "quantity": "9",
      "location": "Delhi",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
    },
    {
      "id": 2,
      "name": "Tomato",
      "price": "19",
      "quantity": "4",
      "location": "Ahmedabad",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
      
    },
    {
      "id": 3,
      "name": "Apple",
      "price": "27",
      "quantity": "49",
      "location": "Kashmir",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",

    },
    {
      "id": 4,
      "name": "Jam",
      "price": "56",
      "quantity": "79",
      "location": "Delhi",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",

    },
    {
      "id": 5,
      "name": "Honey",
      "price": "12",
      "quantity": "9",
      "location": "Delhi",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",

    },
    {
      "id": 6,
      "name": "Tea",
      "price": "12",
      "quantity": "9",
      "location": "Delhi",
      "url": "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",

    },
  ];

  @Output() descriptionItemEvent = new EventEmitter<any>();

  addToCartEvent(productData: any) {
    this.descriptionItemEvent.emit(productData);
  }

}
