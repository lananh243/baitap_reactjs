import React, { Component } from 'react';

interface Props {}

interface State {
  userName: string;
}

export default class Bai1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "Lan Anh"
    };
  }

  render() {
    return (
      <div>
        <h1>Bài 1</h1>
        <p>Name: {this.state.userName}</p>
      </div>
    );
  }
}