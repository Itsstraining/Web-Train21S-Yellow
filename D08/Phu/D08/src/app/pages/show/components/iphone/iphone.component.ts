import { Component, Input, OnInit } from '@angular/core';
import { iphone } from '../../../../../models/iphone.models';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {

  constructor() { }

  @Input()
  iphone: iphone;

  ngOnInit(): void {
  }

}
