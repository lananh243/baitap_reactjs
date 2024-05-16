import React, { Component } from 'react';

interface Props {}
interface State {
  inputValue: string;
}

export default class Bai8 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    document.title = this.state.inputValue;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ inputValue: value });
    document.title = value;
  };

  render() {
    return (
      <div>
        <h1>Bài 8</h1>
        <input
          type="text"
          placeholder="Thay đổi tiêu đề"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}