import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  public counterchange : EventEmitter<number> = new EventEmitter;
  
  public cong()
  {
    this.counter++;
    this.counterchange.emit(this.counter);
  }
  
  public tru()
  {
    if(this.counter == 0)
    {
      return;
    }
    this.counter--;
    this.counterchange.emit(this.counter);
  }
}