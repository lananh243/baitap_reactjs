import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
}
export default class Children_Comp extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "Nguyễn Văn Nam"
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên bên component con : {this.state.name}</p>
        <p>Họ và tên bên component cha : {this.state.name}</p>
      </div>
    )
  }
}
