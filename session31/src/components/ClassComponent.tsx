import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
    age: number,
    loading: boolean,
    count: number,
}
export default class ClassComponent extends Component<Props, State> {
    constructor(props :Props){
        super(props)
        // khi khai báo state ở trong component 
        this.state = {
            name: "hoa",
            age: 25,
            loading : true,
            count : 0
        }
    }
    componentDidMount(): void {
        console.log("Chạy sau khi component được render lần đầu");
        /*
            Phương thức componentDidMount đc chạy sau khi component render
            các UI đc cập nhật vào DOM
            đây là nới lí tưởng để thực hiện các việc xử lí như call API lấy dữ liệu và hiển thị
        */ 
    }
    // Dùng các phương thức mặc định React cung cấp
    componentWillUnmount(): void {
        console.log("Chạy sau khi cóntructor khởi tạo xong giá trị state !!");
        /*
        Trong phương thức componentWillMount có thể tính toán lại state
        nhưng lưu ý cái thời gian chuyển từ phương thức componentWillMount đến
        phương thức render rất nhanh cho nên lưu ý việc cập nhật state
        */ 
    }
    handleClick = () => {
      this.setState ({
        count:this.state.count + 1,
      })
    }
    // Các phương thức cung cấp ở trong giai đoạn updating
    componentWillUpdate(): void {
        console.log("component willUpdate được gọi !!!");
     
    }
    componentDidUpdate(): void {
        console.log("component DidUpdate được gọi !!");
        
    }
  render() {
    console.log("component được re-render : render lại");
    
        // this.setState({
        //     name: "hồng"
        // }) 
    console.log("component được render lần đầu");
    
    return (
      <div>
        <p>Classcomponent</p>
        <p>Xin chào {this.state.name}</p>
        <p>Giá trị count : {this.state.count}</p>
        <button onClick={this.handleClick}>Thay đổi state</button>
      </div>
    )
  }
}
