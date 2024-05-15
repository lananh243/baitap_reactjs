import React, { Component } from 'react'
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
export default class Post extends Component<{}, State> {
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
      <div>
        {this.state.listPosts.map((list: List)=> (
            <div key={list.id}>
                <p>Id : {list.id}</p>
                <p>Title : {list.title}</p>
                <p>Content : {list.content}</p>
                <p>Author : {list.author}</p>
                <p>***********************</p>
            </div>
        ))}
      </div>
    )
  }
}
