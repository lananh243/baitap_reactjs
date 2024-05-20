import React, { Component } from "react";
type Props = {};
type State = {
  count: number;
  timerId: number;
};
export default class Bai10 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      timerId: 0,
    };
  }
  componentDidMount(): void {
    const timerId = setInterval(() => {
    //   if (this.state.count === 9) {
    //     this.setState({
    //       count: 0,
    //     });
    //   } else {
    //     this.setState({
    //       count: this.state.count + 1,
    //     });
    //   }
      this.setState({
          count: this.state.count === 9 ? 0 : this.state.count + 1,
      })
    }, 1000);
    this.setState({
      timerId: timerId,
    });
  }
  // Hủy bỏ sự kiện
  componentWillUnmount(): void {
    clearInterval(this.state.timerId);
  }
  render() {
    return (
      <div>
        <h1>Bài 10</h1>
        <h2>Count : {this.state.count}</h2>
      </div>
    );
  }
}
