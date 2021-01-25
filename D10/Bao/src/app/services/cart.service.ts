import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  constructor() { }

  carts: Cart[] = []
  public addCart(itemCart: Cart) 
  {

    if(this.carts.length==0)
    {
      this.carts.push(itemCart)
      return
    }
    else
    {
      for(let i=0;i<this.carts.length;i++)
      {
        if(this.carts[i].item.id==itemCart.item.id)
        {
          this.carts[i].SoLuong+= itemCart.SoLuong
          return  
        }
      }
    }
    this.carts.push(itemCart)
  }

  public checkCarts()
  {
    console.log(this.carts)
  }

  public clearCart()
  {
    let carts: Cart[] = []
    this.carts= carts

  }
}
