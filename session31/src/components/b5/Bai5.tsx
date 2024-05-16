import React, { Component } from 'react'
interface Props {
  content : string;
}
export default class Bai5 extends Component<Props> {
  render() {
    const {content} = this.props;
    return (
      <div>
        <h1>Bài 5</h1>
        <h3>Status : <i>{content}</i></h3>
      </div>
    )
  }
}
