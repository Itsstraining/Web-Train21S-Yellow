import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../../models/cart.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  public cartArr: Cart[]=
  [
    {
       SoLuong: 1,
       item:{
        id: "001",
        Name: "Món hàng 1",
        Stock: true,
        price: 100000,
        img: '../assets/image/Cay1.jpg'
      }
    },
    {
      SoLuong: 2,
      item:{
       id: "002",
       Name: "Món hàng 2",
       Stock: true,
       price: 200000,
       img: '../assets/image/Cay2.jpg'
     }
   },
   {
    SoLuong: 3,
    item:{
     id: "003",
     Name: "Món hàng 3",
     Stock: true,
     price: 300000,
     img: '../assets/image/Cay3.jpg'
   }
 },

  ]
  ngOnInit(): void {
  }

}
