import React, { Component } from 'react'
import Product from './Product';
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
export default class ListProduct extends Component<Props,State> {
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
      <div>Bài 8
        <Product/>
      </div>
    )
  }
}
