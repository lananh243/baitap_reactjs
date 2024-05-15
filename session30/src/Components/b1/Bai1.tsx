import React, { Component } from 'react'
interface State {
  content: string
}
interface Props {}
export default class Bai1 extends Component<Props,State> {
  constructor(props: Props){
    super(props)
    this.state = {
      content: "Click me"
    }
  }
  handleClick = () => {
    this.setState ({
      content: "Clicked"
    })
  }
  render() {
    return (
      <div>Bài 1
        <p>{this.state.content}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
