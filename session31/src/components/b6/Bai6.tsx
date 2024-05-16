import React, { Component } from 'react'
interface Props {
  content : string;
}
export default class Bai6 extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  render() {
    const {content} = this.props; 
    return (
      <div>
        <h1>Bài 6</h1>
        <b>Message : <i>{content}</i></b>
      </div>
    )
  }
}
