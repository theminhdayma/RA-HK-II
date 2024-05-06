import React, { Component } from 'react'

type Props = {
    name: string,
}

export default class Exercises01 extends Component<any, Props> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "Nguyễn Thế Minh"
        }
    }
  render() {
    return (
      <div>
        <span>Họ và tên: {this.state.name}</span>
      </div>
    )
  }
}
