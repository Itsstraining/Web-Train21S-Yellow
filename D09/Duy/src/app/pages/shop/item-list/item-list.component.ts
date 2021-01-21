import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../app/services/item-data.service';
import { item } from '../../../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(private itemData:DataService ) { }
  itemList: item [];
  ngOnInit(): void {
    this.itemList = this.itemData.itemList;
  }

}
