import React, { Component } from 'react'
interface Props {}
interface State {
    listPro : ListPro[];
}
interface ListPro {
    id: number,
    name: string,
    price: number,
    quantity: number,
}
export default class Product extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            products : [
                {
                    id: 1,
                    name: "Cam sành",
                    price: 15000,
                    quantity: 10,
                },
                {
                    id: 2,
                    name: "Táo mỹ",
                    price: 20000,
                    quantity: 5,
                },
                {
                    id: 3,
                    name: "Dưa hấu",
                    price: 50000,
                    quantity: 8,
                }
            ]
        }
    }
  render() {
    return (
      <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {this.state.products.map((product: ListPro)=> (
                    <tr key = {product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}
