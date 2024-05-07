import React, { Component } from 'react'

interface Props {}

export default class Notification extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    componentWillMount(): void {
        console.log("Component đã được mount!");      
    }
  render() {
    return (
      <div>Notification</div>
    )
  }
}
