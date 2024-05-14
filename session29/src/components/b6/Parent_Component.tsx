import React, { Component } from 'react'
import Child_Component from './Child_Component';
interface State {
    users: User[];
    
}
interface Props {}
interface User {
    id: number;
    name: string;
    address: string;
    email: string;
}
export default class Parent_Component extends Component<Props, State> {
    constructor(props : Props) {
        super(props)
        this.state = {
            users : [
                {
                    id: 1,
                    name: "John",
                    address: "Hà Nội",
                    email: "john@gmail.com",
                },
                {
                    id: 2,
                    name: "Linda",
                    address: "Hà Nam",
                    email: "linda@gmail.com",

                }
            ]
        }
    }
  render() {
    return (
      <div>Bài 6
        <Child_Component></Child_Component>
      </div>
    )
  }
}
