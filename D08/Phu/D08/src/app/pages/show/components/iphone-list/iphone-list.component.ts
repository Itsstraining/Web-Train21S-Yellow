import { Component, OnInit } from '@angular/core';
import { iphone } from '../../../../../models/iphone.models';

@Component({
  selector: 'app-iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrls: ['./iphone-list.component.scss']
})
export class IphoneListComponent implements OnInit {

  constructor() { }

  iphoneList: Array<iphone> = [{
    id: "A001",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A002",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A003",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A004",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A005",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },]

  ngOnInit(): void {
  }

}
