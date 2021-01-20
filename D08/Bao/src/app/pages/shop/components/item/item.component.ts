import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  //Phần làm 
  @Input()
  public item: Item
  //Phần làm 
  ngOnInit(): void {
  }

}
