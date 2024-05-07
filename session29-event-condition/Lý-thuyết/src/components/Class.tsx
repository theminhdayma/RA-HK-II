import React, { Component } from 'react'

export default class Class extends Component {
    //Nơi khai báo các phương thức
    handleClick = () => {
        console.log("Click click click");       
    }
    //Truyền để lấy tham số
    handleUpdate = (idUser: number) => {
        console.log("Id của Thế Minh: ", idUser);      
    }
  render() {
    return (
      <div>
        Class
        <p onClick={() => this.handleUpdate(2005)}>Thế Minh</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
