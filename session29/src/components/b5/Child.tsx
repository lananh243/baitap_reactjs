import React, { Component } from "react";
interface State {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface Props {
  a: number;
  b: string;
  c: string;
  d: number;
}
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
    const { a,b,c,d } = this.props;
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id : {a}</p>
        <p>Product name : {b}</p>
        <p>Price : {c}</p>
        <p>Quantity : {d}</p>
      </div>
    );
  }
}
