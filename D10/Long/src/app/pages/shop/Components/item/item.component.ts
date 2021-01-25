import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../../models/cart.model';
import { item } from '../../../../models/item.model';
import { CartServiceService } from '../../../../services/cart-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
  }
  @Input()
  public item:item

  public addToCart(){
    let cart:Cart =new Cart()
    cart.item=this.item
    cart.soluong=1
    this.cartService.addToCart(cart)
    this.cartService.checkCart()
  }

}
