import React, { Component } from 'react'

export default class Baitap8 extends Component {

    changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        document.title = e.target.value
    }

  render() {
    return (
      <div>
        <label htmlFor="">Nhập tiêu đề mới</label>
        <input onChange={this.changeTitle} type="text" />
      </div>
    )
  }
}
