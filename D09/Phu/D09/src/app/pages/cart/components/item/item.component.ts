import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Cart } from '../../../../../models/cart.models';
import { iphone } from '../../../../../models/iphone.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input()
  cart: Cart

  

  ngOnInit(): void {
  }

  public remove()
  {
    this.cartService.remove(this.cart);
    this.cartService.check()
  }

  public add()
  {
    this.cartService.addToCart(this.cart);
  }
  
  



}
