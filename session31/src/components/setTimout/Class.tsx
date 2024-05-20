// import React, { Component } from 'react'
// interface Props {}
// interface State {

// }
// let interval: any;
// export default class ClassComponent extends Component<Props,State> {
//     constructor(props:Props){
//         super(props)
//         this.state={
//             count: 0
//         }
//     }
//     componentDidMount(): void {
//         interval = setInterval(()=> {
//             console.log("Interval đc gọi");
            
//         },2000)
//     }
//     handleClick = () => {
//         clearInterval(interval)
//     }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Dừng Interval</button>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
interface Props {}
interface State {}
let interval:any;
export default class Class extends Component<Props,State> {
  constructor(props:Props){
            super(props)
            this.state={
                count: 0
            }
        }
        componentDidMount(): void {
            interval = setInterval(()=> {
                console.log("Interval đc gọi");
                
            },2000)
        }
        handleClick = () => {
            clearInterval(interval)
        }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Dừng interval</button>
      </div>
    )
  }
}

