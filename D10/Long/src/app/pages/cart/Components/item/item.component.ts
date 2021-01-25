import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../../../app/models/cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.cart)
  }
  @Input()
  cart:Cart
  
}
