import { Component, OnInit } from '@angular/core';
import { item } from '../../../models/items.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  itemList: Array<item> = [{
    id: "A001",
    name: "Iphone X",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 1000,
    stock: false
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }, {
    id: "A002",
    name: "Iphone 12 Pro",
    img: "../../assets/img/iphone.png",
    quantity: 5,
    price: 2000,
    stock: true
  }]
  ngOnInit(): void {
  }

}
