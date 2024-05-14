import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
    age: number,
}
export default class Class extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "Thu",
            age: 18,
        }
    }
    // khai báo hàm ở trên render()
    handleClick = () => {
        // khi muốn cập nhật state
        this.setState ({
            age : 20,
            name : "Nhài"
        })
    }
  render() {
    return (
      <div>
        {/* 
            trong class để quản lí state
        */}
        {this.state.name} năm nay {this.state.age} tuổi
        {/* Cập nhật state đối với class */}
        <br />
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
