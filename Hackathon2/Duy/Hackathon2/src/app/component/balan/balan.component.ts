import { Component, OnInit } from '@angular/core';
import { MathService } from '../../sevices/math.service';

@Component({
  selector: 'app-balan',
  templateUrl: './balan.component.html',
  styleUrls: ['./balan.component.scss']
})
export class BalanComponent implements OnInit {

  constructor(private balen: MathService) { }
  expression:string = ''
  ngOnInit(): void {
  }
  
  res = 0

  change(){
    console.log(this.expression)
    this.balen.stringToExpression(this.expression)
    this.res = this.balen.executePostfix()
  }
}
