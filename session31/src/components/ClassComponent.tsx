import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
    age: number,
    loading: boolean,
}
export default class ClassComponent extends Component<Props, State> {
    constructor(props :Props){
        super(props)
        // khi khai báo state ở trong component 
        this.state = {
            name: "hoa",
            age: 25,
            loading : true
        }
    }
  render() {
    return (
      <div>
        <p>Classcomponent</p>
        <p>Xin chào {this.state.name}</p>
      </div>
    )
  }
}
