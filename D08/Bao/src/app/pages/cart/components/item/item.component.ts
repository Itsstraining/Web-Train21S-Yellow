import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../../models/cart.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  
  @Input()
  cart: Cart

  ngOnInit(): void {
  }

}
