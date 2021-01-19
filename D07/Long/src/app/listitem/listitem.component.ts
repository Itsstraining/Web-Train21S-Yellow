import { Component, OnInit } from '@angular/core';
import { item } from '../models/item.model';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public items: item[] = [
    {
      ID: "SP1",
      name: "Sách Luyện Tiếng Anh",
      quantity: 2,
      gia: 20000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_41511.jpg",
      stock: false
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    },
    {
      ID: "SP3",
      name: "Cấu Trúc Tiếng Anh",
      quantity: 0,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_187866.jpg",
      stock: false
    },
    {
      ID: "SP4",
      name: "Hackers Ielts: Listening",
      quantity: 0,
      gia: 30000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/a/hackers_ielts_listening_1_2020_06_12_16_57_30.jpg",
      stock: false
    },
    {
      ID: "SP5",
      name: "Hackers Ielts: Writing",
      quantity: 10,
      gia: 32000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_708.jpg",
      stock: true
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    },
    {
      ID: "SP2",
      name: "Atlat",
      quantity: 5,
      gia: 23000,
      img:"https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_6058_1.jpg",
      stock: true
    }
  ]

}
