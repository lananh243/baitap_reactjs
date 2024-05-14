import React, { Component } from 'react'
import Post from './Post';
interface Props {

}
interface State {
    listPosts : List[];
}
interface List {
    id: number,
    title: string,
    content: string,
    author: string,
}
export default class ListPost extends Component<Props, State> {
    constructor(props : Props){
        super(props)
        this.state = {
            listPosts : [
                {
                    id: 1,
                    title: "Tại sao nên học ReactJS",
                    content: "Học ReactJS để đi làm",
                    author: "David"
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giúp truyền dữ liệu từ component con xuống component cha",
                    author: "Linda"
                },
                {
                    id: 3,
                    title: "State trong ReactJS là gì ?",
                    content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
                    author: "David"
                }
            ]
        }
    }
  render() {
    return (
      <div>Bài 7
        <Post/>
      </div>
    )
  }
}
