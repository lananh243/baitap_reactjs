import React, { Component } from 'react'
interface Props {}
interface State {
    content: string,
}
export default class Bai3 extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            content : "Rikkei Academy"
        }
    }
    handleChange = () => {
        this.setState({
          content: "RikkeiSotf",
        });
    };
  render() {
    return (
      <div>
        <h1>Bài 3</h1>
        <h3>Company : <i>{this.state.content}</i></h3>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
