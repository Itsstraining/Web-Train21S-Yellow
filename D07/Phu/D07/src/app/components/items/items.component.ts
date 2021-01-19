import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../../models/items.models';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  @Input()
  item: item;
  
  ngOnInit(): void {
  }

}
