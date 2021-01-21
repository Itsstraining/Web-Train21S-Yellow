import { Injectable } from '@angular/core';
import { cartItem } from '../../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  carts: cartItem[] = []
  public addToCart(cart: cartItem) {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i].item.id == cart.item.id) {
        this.carts[i].soluong += cart.soluong;
        return;
      }
    }
    this.carts.push(cart)
  }
  public checkCart() {
    console.log(this.carts)
  }
}
