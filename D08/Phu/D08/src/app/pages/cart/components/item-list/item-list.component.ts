import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../../../models/cart.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  public listCart: Cart[] = [
    {
    quantity: 10,
    iphone: {
      id: "A001",
      name: "Iphone 12",
      img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
      quantity: 5,
      price: 3000,
      inStock: true
    }
  },{
    quantity: 10,
    iphone: {
      id: "A001",
      name: "Iphone 12",
      img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
      quantity: 5,
      price: 3000,
      inStock: true
    }
  },{
    quantity: 10,
    iphone: {
      id: "A001",
      name: "Iphone 12",
      img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
      quantity: 5,
      price: 3000,
      inStock: true
    }
  },{
    quantity: 10,
    iphone: {
      id: "A001",
      name: "Iphone 12",
      img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
      quantity: 5,
      price: 3000,
      inStock: true
    }
  },{
    quantity: 10,
    iphone: {
      id: "A001",
      name: "Iphone 12",
      img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
      quantity: 5,
      price: 3000,
      inStock: true
    }
  },

  ]

  ngOnInit(): void {
  }

}
