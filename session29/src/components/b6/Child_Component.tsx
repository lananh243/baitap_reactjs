import  { Component } from 'react'
interface State {
    users: User[];
    
}
interface Props {
  a: User;
}
interface User {
    id: number;
    name: string;
    address: string;
    email: string;
}
export default class Child_Component extends Component<Props, State> {
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
    const {a} = this.props;
    return (
      <div>
      {this.state.users.map((a: User) => (
        <div key={a.id}>
          <p>Name: {a.name}</p>
          <p>Address: {a.address}</p>
          <p>Email: {a.email}</p>
          <p>******************</p>
        </div>
      ))}
      </div>
    )
  }
}
