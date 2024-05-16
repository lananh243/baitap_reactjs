import React, { Component } from 'react'

export default class Bai7 extends Component {
    componentDidMount() {
        document.title = 'Bài tập session 30'; 
      }
  render() {
    return (
      <div>
        <h1>Bài 7</h1>
        <b>Thay đổi tiêu đề của tab trình duyệt</b>
      </div>
    )
  }
}
