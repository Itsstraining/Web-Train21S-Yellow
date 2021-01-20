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
  public counter = 0

  @Output() public countchange: EventEmitter<number> = new EventEmitter;

  public plus() {
    this.counter++;
    this.countchange.emit(this.counter);
  }
  public minus() {
    if (this.counter == 0){return;}
    this.counter--;
    this.countchange.emit(this.counter)
  }
}



