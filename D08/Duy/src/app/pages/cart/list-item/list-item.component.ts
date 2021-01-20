import { Component, OnInit } from '@angular/core';
import { cart } from '../../../../models/cart.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  public carts: cart[] = [
    {
      soluong: 10,
      item: {
        id: "A001",
        ten: "đồ 1",
        img: "../../../assets/img/1.gif",
        soluong: 1,
        gia: 20000,
        trangthai: false
      }
    },
    {
      soluong: 10,
      item: {
        id: "A001",
        ten: "đồ 1",
        img: "../../../assets/img/1.gif",
        soluong: 1,
        gia: 20000,
        trangthai: false
      }
    },
    {
      soluong: 10,
      item: {
        id: "A001",
        ten: "đồ 1",
        img: "../../../assets/img/1.gif",
        soluong: 1,
        gia: 20000,
        trangthai: false
      }
    }
  ]

  ngOnInit(): void {
  }

}
