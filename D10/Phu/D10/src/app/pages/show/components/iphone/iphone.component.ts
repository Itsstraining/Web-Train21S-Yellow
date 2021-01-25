import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { iphone } from '../../../../../models/iphone.models';
import { Cart } from '../../../../../models/cart.models';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {

  constructor(private cartService:CartService) { }

  @Input()
  iphone: iphone;

  ngOnInit(): void {
  }

  public AddToCart(){
    let cart:Cart= new Cart(1, this.iphone)
    this.cartService.addToCart(cart)
  }

}
