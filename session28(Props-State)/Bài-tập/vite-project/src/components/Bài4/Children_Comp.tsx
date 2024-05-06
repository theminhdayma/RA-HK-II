import React, { Component } from 'react'

interface Props {
  name: string
}

export default class Children_Comp extends Component<Props> {
  render() {
    const {name} = this.props
    return (
      <div>
        <p>Bên con: {name}</p>
      </div>
    )
  }
}
