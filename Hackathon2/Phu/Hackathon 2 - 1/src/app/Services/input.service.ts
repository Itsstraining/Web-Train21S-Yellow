import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }

  math: string;
  enterMath(math: string) {
    this.math = math;
  }


  expression = []
  infixToPostfix() {//returt ouput
    let stack = [];
    let token = '';
    let output = [];

    for (let i = 0; i < this.expression.length; i++) {
      token = this.expression[i]

      console.log(token)

      if (this.inum(token) == true) {
        output.push(token)
      }
      else if (token == '(') {
        stack.push(token)
      }
      else if (token == ')') {
        for (let j = 0; j < stack.length; j++) {
          let temp = stack.pop()
          if (temp == '(') {
            break;
          }
          output.push(temp)
        }
      }
      else if (this.inum(token) == false) {
        if (this.setlevel(stack[stack.length - 1]) >= this.setlevel(token)) {
          output.push(stack.pop())
        }
        stack.push(token)
      }
      console.log(output)
    }

    let length = stack.length
    if (length != 0) {
      for (let i = 0; i < length; i++) {
        output.push(stack.pop())
      }
    }
    console.log(output)
    console.log(stack)

    return output
  }

  inum(num: string) {

    if (num == '+' || num == '-' || num == '*' || num == '/' || num == '(' || num == ')')
      return false;
    else {
      return true;
    }
  }

  setlevel(toantu: string) {
    if (toantu == '+' || toantu == '-') {
      return 1;
    }
    if (toantu == '/' || toantu == '*') {
      return 2;
    }
  }

  stringToExpression(str: string) {
    this.expression = []

    let operatorAfter = false
    let isNegative = false
    let isNumAfter = false

    let operator = '+-*/'
    for (let i = 0; i < str.length; i++) {
      let token = str[i]
      if (token == '(' || token == ')') {//ngoac
        operatorAfter = false
        isNumAfter = false
        operatorAfter = true
        this.expression.push(token)
      }
      else if (operator.includes(token)) {//toan tu
        isNumAfter = false
        if (token == '-' && isNegative) {
          isNegative = true
        }
        else {
          this.expression.push(token)
        }
        operatorAfter = true
      }
      else {//so
        operatorAfter = false
        if (!isNumAfter) {
          if (isNegative) {
            this.expression.push('-' + token)
            isNegative = false
          }
          else {
            this.expression.push(token)
            isNegative = false
          }
          isNumAfter = true
        }
        else {
          let temp = this.expression.pop()
          temp = temp + token
          this.expression.push(temp)
        }
      }
    }
    console.log(this.expression)
  }

  executePostfix() {//return num
    let postFix = this.infixToPostfix()
    let res = []
    console.log(postFix)
    let operator = '+-*/'
    let length = postFix.length
    for (let i = 0; i < length; i++) {
      let token = postFix[i]
      if (operator.includes(token)) {
        let b = res.pop()
        let a = res.pop()
        let temp = eval(a + token + b)
        res.push(temp)
      }
      else {
        res.push(token)
      }
    }
    console.log(res[0])
    return res[0]
  }
}
