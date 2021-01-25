import { Injectable } from '@angular/core';
import { iphone } from '../../models/iphone.models';

@Injectable({
  providedIn: 'root'
})
export class IphoneDataService {

  constructor() { }

  iphoneList: iphone[] = [{
    id: "A001",
    name: "Iphone 11",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A002",
    name: "Iphone 12",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12.png?v=1602752249000",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A003",
    name: "Iphone 13",
    img: "https://bizweb.dktcdn.net/100/031/560/products/broshop-iphone-12-pro-silver-1a1efc32-f878-47a1-913a-a7d2e877ff59-c44132d9-f7dd-42f3-b7cb-e3dc4187ee19.png?v=1602663475023",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A004",
    name: "Iphone 14",
    img: "https://tawin.vn/wp-content/uploads/2020/10/red.jpg",
    quantity: 5,
    price: 3000,
    inStock: true
  },{
    id: "A005",
    name: "Iphone 15",
    img: "https://bizweb.dktcdn.net/100/116/615/products/12pro-2e5231bc-3d84-475c-896b-1fe3726e517b.png?v=1602752634000",
    quantity: 5,
    price: 3000,
    inStock: true
  },]

  public addIphone(iphone: iphone)
  {
    this.iphoneList.push(iphone);
  }

  // Can remove tai vi tri nao (Position)
  public removeIphone(pos:number)
  {
    this.iphoneList = this.iphoneList.splice(pos,1);
  }

}
