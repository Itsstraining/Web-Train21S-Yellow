import { Component, OnInit } from '@angular/core';
import { cart } from '../../../../models/cart.model';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  constructor() { }
  public carts: cart[] = [
    {
      soluong:19,
      item:{
        ID: "SP1",
        name: "Sách Luyện Tiếng Anh",
        quantity: 2,
        gia: 20000,
        img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_41511.jpg",
        stock: false
      },
    },
    {
      soluong:19,
      item:{
        ID: "SP1",
        name: "Sách Luyện Tiếng Anh",
        quantity: 2,
        gia: 20000,
        img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_41511.jpg",
        stock: false
      },
    },
    {
      soluong:19,
      item:{
        ID: "SP1",
        name: "Sách Luyện Tiếng Anh",
        quantity: 2,
        gia: 20000,
        img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_41511.jpg",
        stock: false
      },
    },
  ]
  ngOnInit(): void {
  }

}
