import React, { Component } from 'react'

interface ClassComponent {
    name: string,
    age: number,
    address: string,
    count: number
}

export default class StateClass extends Component<any, ClassComponent> {
    constructor(props: ClassComponent){
        super(props)
        this.state = {
            name: "Sâm",
            age: 17,
            address: "Phụng Thượng",
            count: 1,
        }
    }

    // Nơi khai báo các phương thức 
    // Khi muốn cập nhật state ở bên trong class thì dùng
    // this.setState ( setState({}) )
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <p>Tên em là: {this.state.name}</p>
        <p>Gía trị count ban đầu: {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
