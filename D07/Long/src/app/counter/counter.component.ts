import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  public Quantity = 0


  ngOnInit(): void {
  }
  public cong() 
  {
    this.Quantity++
  }
  public tru()
  {
    if(this.Quantity == 0)
    {
      return 0;
    }
    this.Quantity--

  }

}
