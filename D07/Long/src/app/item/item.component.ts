import { Component, Input, OnInit } from '@angular/core';
import { item } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  public item:item

}
