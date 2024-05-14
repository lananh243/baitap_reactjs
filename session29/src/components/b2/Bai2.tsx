import React, { Component } from 'react'
interface Props {

}
interface State {
    id: number,
    name: string,
    dayOfBirth: string,
    address: string,
}
export default class Bai2 extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            id: 1,
            name: "Nguyễn Văn Sơn",
            dayOfBirth: "20/12/2023",
            address: "Thanh Xuân, Hà Nội",
        }

    }
  render() {
    return (
      <div>Bài 2
        <h2>Thông tin cá nhân</h2>
        <p>Id : {this.state.id}</p>
        <p>Tên : {this.state.name}</p>
        <p>Ngày sinh : {this.state.dayOfBirth}</p>
        <p>Địa chỉ : {this.state.address}</p>
      </div>
    )
  }
}
