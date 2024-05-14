import React, { Component } from "react";
import Child from "./Child";
interface State {
  id: number;
  name: string;
  price: string;
  quantity: number;
}
interface Props {}

export default class Parent extends Component<Props, State> {
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
    return <div>Bài 5
      <Child></Child>
    </div>;
  }
}
