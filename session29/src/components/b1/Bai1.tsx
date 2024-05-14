import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
}
export default class Bai1 extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "Nguyễn Minh Sơn",
        }
    }
  render() {
    return (
      <div>Bài 1
        <p>Họ và tên : {this.state.name}</p>
      </div>
    )
  }
}

