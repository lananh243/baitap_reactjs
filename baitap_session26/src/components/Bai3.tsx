import React, { Component } from 'react'
interface User {
    name: string;
    gender: string;
    birthday: string;
    email: string;
    address: string;
}
export default class Bai3 extends Component {
    user: User = {
        name: "Nguyễn Văn A",
        gender: "Nam",
        birthday: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    }
  render() {
    return (
      <div>Bài 3
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: <b>{this.user.name}</b></li>
            <li>Giới tính: <b>{this.user.gender}</b></li>
            <li>Ngày sinh: <b>{this.user.birthday}</b></li>
            <li>Email: <b>{this.user.email}</b></li>
            <li>Địa chỉ: <b>{this.user.address}</b></li>
        </ul>
      </div>
    )
  }
}
