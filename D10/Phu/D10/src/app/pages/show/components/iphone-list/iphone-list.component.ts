import { Component, OnInit } from '@angular/core';
import { IphoneDataService } from '../../../../services/iphone-data.service';
import { iphone } from '../../../../../models/iphone.models';

@Component({
  selector: 'app-iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrls: ['./iphone-list.component.scss']
})
export class IphoneListComponent implements OnInit {

  constructor(private iphoneData: IphoneDataService) { }

  iphoneList: iphone[];

  ngOnInit(): void {
    this.iphoneList = this.iphoneData.iphoneList;
  }

}
