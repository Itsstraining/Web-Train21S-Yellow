import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Cart } from '../../../../models/cart.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService: CartService) { }
  
  @Input()
  cart: Cart

  ngOnInit(): void {}

  public clearCart(){
    this.cartService.clearCart()
    this.cartService.checkCarts()
  }
}