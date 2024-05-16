import React, { Component } from 'react'
interface Props {}
interface State {
    content : string
}
export default class Bai4 extends Component<Props,State> {
    constructor(props :Props){
        super(props)
        this.state = {
            content : "Học code để đi làm"
        }
    }
    handleChange = () => {
        this.setState ({
            content : "Học code sẽ thành công. Cố lên!!!"
        })
    } 
    shouldComponentUpdate(): boolean {
        return false;
    }
  render() {
    return (
      <div>
        <h1>Bài 4</h1>
        <h3>Solgan : <i>{this.state.content}</i></h3>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
