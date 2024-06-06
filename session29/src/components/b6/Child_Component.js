"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class Child_Component extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
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
        };
    }
    render() {
        const { a } = this.props;
        return (<div>
      {this.state.users.map((a) => (<div key={a.id}>
          <p>Name: {a.name}</p>
          <p>Address: {a.address}</p>
          <p>Email: {a.email}</p>
          <p>******************</p>
        </div>))}
      </div>);
    }
}
exports.default = Child_Component;
