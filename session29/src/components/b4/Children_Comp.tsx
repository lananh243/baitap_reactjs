import React, { Component } from 'react'
interface Props {
  a:string;
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
    const { a } = this.props;
    return (
      <div>
        <p>Họ và tên bên component con : {a}</p>
        <p>Họ và tên bên component cha : {a}</p>
      </div>
    )
  }
}
