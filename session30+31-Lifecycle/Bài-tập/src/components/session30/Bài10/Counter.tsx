import React, { Component } from 'react'

interface Count {
    count: number
}

export default class Counter extends Component<any, Count> {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0
      };
    }
    timerID: number = 0

    componentDidMount() {
      this.timerID = setInterval(
        () => this.setState((prevState) => ({
              count: (prevState.count + 1) % 11
          })),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h2>Giá trị đếm: {this.state.count}</h2>
        </div>
      );
    }
}
