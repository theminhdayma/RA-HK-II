import React, { Component } from 'react'

interface ClassComponent {
    age: number
    number: number[]
}

export default class Class extends Component<ClassComponent> {
  render() {
        // destructoring
    const {age} = this.props
    return (
      <div>
        <p>Năm nay tôi {age} tuổi</p>
        <ul>
            {this.props.number.map((item, index)=> {
                return <li key={index}>số {item}</li>
            })}
        </ul>
      </div>
    )
  }
}
