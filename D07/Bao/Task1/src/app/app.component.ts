import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent 
{
  title = 'Task1';
  public dem = 0;
  public countChange(x)
  {
    this.dem = x;
  }
}
