import React, { Component } from 'react'
interface State {
  id: number;
  name: string;
  price: string;
  quantity: number;
}
interface Props {}
export default class Child extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 1,
      name: "Bưởi ba roi",
      price: "12.000 đ",
      quantity: 6,
    };
  }
  render() {
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id : {this.state.id}</p>
        <p>Product name : {this.state.name}</p>
        <p>Price : {this.state.price}</p>
        <p>Quantity : {this.state.quantity}</p>
      </div>
    )
  }
}
