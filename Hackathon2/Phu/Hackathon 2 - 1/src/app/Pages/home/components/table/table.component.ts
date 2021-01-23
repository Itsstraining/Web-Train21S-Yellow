import { Component, OnInit } from '@angular/core';
import { InputService } from '../../../../Services/input.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private balen: InputService) { }

  ngOnInit(): void {
    for (let i = 1; i < 100; i++) {
      this.data.push(i + 1)
    }
  }
  data = []

  expression: string = ''
  res = 0

  change() {

    console.log(this.expression)
    this.balen.stringToExpression(this.expression)
    this.res = this.balen.executePostfix()
  }

}
