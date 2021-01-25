import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from '../../../../models/cart.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private servicecart: CartService) { }

  public carts: cartItem[] = [
    // {
    //   soluong: 10,
    //   item: {
    //     id: "A001",
    //     ten: "đồ 1",
    //     img: "../../../assets/img/1.gif",
    //     soluong: 1,
    //     gia: 20000,
    //     trangthai: false
    //   }
    // },
    // {
    //   soluong: 10,
    //   item: {
    //     id: "A001",
    //     ten: "đồ 1",
    //     img: "../../../assets/img/1.gif",
    //     soluong: 1,
    //     gia: 20000,
    //     trangthai: false
    //   }
    // },
    // {
    //   soluong: 10,
    //   item: {
    //     id: "A001",
    //     ten: "đồ 1",
    //     img: "../../../assets/img/1.gif",
    //     soluong: 1,
    //     gia: 20000,
    //     trangthai: false
    //   }
    // }
  ]

  ngOnInit(): void {
    this.carts = this.servicecart.carts
  }

}
