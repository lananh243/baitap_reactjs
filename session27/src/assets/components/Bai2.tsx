import React, { Component } from 'react'

export default class Bai2 extends Component {
  sum(a:number,b:number):number {
    return a + b;
  }
  sub(a:number,b:number):number {
      return a - b;
  }
  multip(a:number,b:number):number {
      return a * b;
  }
  div(a:number,b:number):number {
      return a / b;
  }
  render() {
    const a: number = 10;
    const b: number = 10;
    return (
      <div>Bài 2
        <h3>Danh sách kết quả</h3>
        <ul>
            <li>10 + 10 = {this.sum(a,b)}</li>
            <li>10 - 10 = {this.sub(a,b)}</li>
            <li>10 * 10 = {this.multip(a,b)}</li>
            <li>10 / 10 = {this.div(a,b)}</li>
        </ul>
      </div>
    )
  }
}
