import React, { Component } from 'react'

export default class UserInfo extends Component {
    nameUser: string = "Nguyễn Thế Minh"
    sex: string = "Nam"
    date: string = "23/12/2005"
    email: string = "theminh2005z@gmail.com"
    address: string = "Phúc Thọ - Hà Nội"
  render() {
    return (
      <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: {this.nameUser}</li>
            <li>Giới tính: {this.sex}</li>
            <li>Ngày sinh: {this.date}</li>
            <li>Email: {this.email}</li>
            <li>Địa chỉ: {this.address}</li>
        </ul>
      </div>
    )
  }
}
