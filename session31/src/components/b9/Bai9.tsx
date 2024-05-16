import React, { Component } from 'react';

interface Props {}

interface State {
  currentTime: Date;
}

export default class Bai9 extends Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { currentTime } = this.state;
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return (
      <div>
        <h1>Bài 9</h1>
        <b>
          Thời gian hiện tại: <i>{hours} </i>: <i>{minutes} </i>: <i>{seconds}</i>
        </b>
      </div>
    );
  }
}