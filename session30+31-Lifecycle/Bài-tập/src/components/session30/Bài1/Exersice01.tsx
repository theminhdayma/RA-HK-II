import React, { Component } from 'react'

interface Props {}

interface Name {
    userName: string
}

export default class Exersice01 extends Component<Props, Name> {
    constructor(props: Props) {
        super(props)
        this.state = {
            userName: "Nguyễn Thế Minh",
        }
    }
  render() {
    return (
      <div>
        <p>Tên tôi là: {this.state.userName}</p>
      </div>
    )
  }
}
