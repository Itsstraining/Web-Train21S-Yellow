import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from '../../../../models/cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input()
  cart:cartItem;
  ngOnInit(): void {
  }

}
