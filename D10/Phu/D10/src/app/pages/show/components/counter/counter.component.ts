import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public counter = 0;

  @Output() 
  public increase()
  {
    this.counter++;
  }

  public decrease()
  {
    if(this.counter == 0)
    {
      return;
    }
    this.counter--;
  }

}
