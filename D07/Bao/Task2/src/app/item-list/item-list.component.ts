import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//Phần làm 
  public itemArr: Item[] =
    [
      {
        id: "001",
        Name: "Món hàng 1",
        Stock: true,
        price: 10000,
        img: '../assets/image/Cay1.jpg'
      },
      {
        id: "002",
        Name: "Món hàng 2",
        Stock: false,
        price: 20000,
        img: '../assets/image/Cay2.jpg'
      },
      {
        id: "003",
        Name: "Món hàng 3",
        Stock: true,
        price: 30000,
        img: '../assets/image/Cay3.jpg'
      },
      {
        id: "004",
        Name: "Món hàng 4",
        Stock: false,
        price: 40000,
        img: '../assets/image/Cay4.jpg'
      },
      {
        id: "005",
        Name: "Món hàng 5",
        Stock: true,
        price: 50000,
        img: '../assets/image/Cay5.jpg'
      },
      {
        id: "001",
        Name: "Món hàng 1",
        Stock: true,
        price: 10000,
        img: '../assets/image/Cay1.jpg'
      },
      {
        id: "002",
        Name: "Món hàng 2",
        Stock: false,
        price: 20000,
        img: '../assets/image/Cay2.jpg'
      },
      {
        id: "003",
        Name: "Món hàng 3",
        Stock: true,
        price: 30000,
        img: '../assets/image/Cay3.jpg'
      },
      {
        id: "004",
        Name: "Món hàng 4",
        Stock: false,
        price: 40000,
        img: '../assets/image/Cay4.jpg'
      },
      {
        id: "005",
        Name: "Món hàng 5",
        Stock: true,
        price: 50000,
        img: '../assets/image/Cay5.jpg'
      },
    ]
//Phần làm 
}
