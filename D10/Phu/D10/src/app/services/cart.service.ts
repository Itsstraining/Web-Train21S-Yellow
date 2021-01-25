import { Injectable } from '@angular/core';
import { Cart } from '../../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  carts: Cart[] = []
  public addToCart(cart: Cart) {
    for (let i = 0; i < this.carts.length; i++)
    {
      if (this.carts[i].iphone.id == cart.iphone.id)
      {
        this.carts[i].quantity ++;
        return;
      }
    }
    this.carts.push(cart)
  }

  public check()
  {
    console.log(this.carts);
  }
  
  public remove(cart: Cart)
  {
    for(let i = 0; i < this.carts.length; i++)
    {
      if (this.carts[i].iphone.id == cart.iphone.id)
      {
        if (this.carts[i].quantity == 0)
        {
          this.carts = this.carts.splice(i, 1);
          return;
        }
        this.carts[i].quantity--;
        return;
      }
    }
  }


  public removeAll(cart: Cart)
  {
    for(let i = 0; i < this.carts.length; i++)
    {
      if (this.carts[i].iphone.id = cart.iphone.id) 
      {
        this.carts = this.carts.splice(i, 1);
        return;
      }
    }
  }

  public cleanCart(cart: Cart)
  {
    this.carts.length = 0;
  }

  // public grandTotal(): number
  // {
  //   let total = 0;
  //   for (let cart of this.carts)
  //   {
  //     total += cart

  //   }
  // }




}


