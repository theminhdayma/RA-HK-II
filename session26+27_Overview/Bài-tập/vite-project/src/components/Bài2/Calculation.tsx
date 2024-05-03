import React, { Component } from 'react'

export default class Calculation extends Component {
  render() {
    const a: number = 10;
    return (
      <div>
        <h3>Danh sách kết quả</h3>
        <ul>
            <li>{a} + {a} = {a+a}</li>
            <li>{a} - {a} = {a-a}</li>
            <li>{a} * {a} = {a*a}</li>
            <li>{a} / {a} = {a/a}</li>
        </ul>
      </div>
    )
  }
}
