import React, { Component } from 'react'
interface State {
    name: string
}
interface Props {}
export default class Class extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "nam"
        }

    }
    // nơi khai báo phương thức
    handleClick = () => {
        // đối vơi class Component khi muốn cập nhật state thì dùng setState
        this.setState ({
            name: "hà"
        })
    }
  render() {
    return (
      <div>class
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
