import React, { Component } from 'react'

interface Slogan {
    slogan: string
}

export default class Baitap4 extends Component<any, Slogan> {
    constructor (props: any) {
        super(props)
        this.state = {
            slogan: "Thế Minh đẹp trai !!!"
        }
    }

    shouldComponentUpdate(): boolean {
        return false
    }

    handleChange = () => {
        this.setState({
            slogan: "Thế Minh"
        })
    }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleChange}>Change State</button>
      </div>
    )
  }
}
