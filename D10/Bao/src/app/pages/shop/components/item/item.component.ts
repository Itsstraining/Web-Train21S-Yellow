import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../../models/cart.models';
import { Item } from '../../../../models/item.models';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit 
{
  constructor(private serviceCart: CartService) {}

  //Phần làm 
  @Input()
  item: Item
  ngOnInit(): void {}

  public addToCart()
  {
    let cart :Cart=new Cart(1,this.item)
    this.serviceCart.addCart(cart)
    this.serviceCart.checkCarts()
  }
  //Phần làm
}
