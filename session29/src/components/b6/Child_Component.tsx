import React, { Component } from 'react'
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
export default class Child_Component extends Component {
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
      <div>
      {this.state.users.map((user: User) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Address: {user.address}</p>
          <p>Email: {user.email}</p>
          <p>******************</p>
        </div>
      ))}
      </div>
    )
  }
}
