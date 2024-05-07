import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(): void {
        console.log("Xóa DOM");
        /*
          chạy cuối cùng khi phần tử xóa khỏi DOM
          thường dùng để clear time-out... xóa khỏi bộ nhớ
        */
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
