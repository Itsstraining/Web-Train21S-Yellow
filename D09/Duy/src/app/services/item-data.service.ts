import { Injectable } from '@angular/core';
import { item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  itemList: item[] = [
    {
    id: "A001",
    ten: "đồ 1",
    img: "../../../assets/img/1.gif",
    soluong: 1,
    gia: 20000,
    trangthai: false
  },
  {
    id: "A002",
    ten: "đồ 2",
    img: "../../../assets/img/2.png",
    soluong: 3,
    gia: 50000,
    trangthai: true
  },
  {
    id: "A003",
    ten: "đồ 3",
    img: "../../../assets/img/3.png",
    soluong: 7,
    gia: 60000,
    trangthai: false
  },
  {
    id: "A004",
    ten: "đồ 4",
    img: "../../../assets/img/4.png",
    soluong: 10,
    gia: 100000,
    trangthai: false
  },
  {
    id: "A005",
    ten: "đồ 5",
    img: "../../../assets/img/5.png",
    soluong: 0,
    gia: 160000,
    trangthai: true
  },
  {
    id: "A006",
    ten: "đồ 6",
    img: "../../../assets/img/6.png",
    soluong: 15,
    gia: 150000,
    trangthai: false
  }
  ]

  public addItem(item: item) {
    this.itemList.push(item);
  }

  public deleteItem(pos: number) {
    this.itemList = this.itemList.splice(pos, 1);
  }
}
