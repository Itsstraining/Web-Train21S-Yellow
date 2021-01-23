import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }

  math: string;
  enterMath(math: string)
  {
    this.math = math;
  }
}
