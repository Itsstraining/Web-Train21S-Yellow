import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from '../../../../models/cart.model';
import { item } from '../../../../models/item.model';
import { CounterComponent } from '../counter/counter.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService :CartService) { }

  @Input()
  item: item;

  ngOnInit(): void {
  }

  public addToCart(){
    let cart:cartItem = new cartItem(1,++this.item.gia, this.item)
    this.cartService.addToCart(cart)
    this.cartService.checkCart()
  }

}
