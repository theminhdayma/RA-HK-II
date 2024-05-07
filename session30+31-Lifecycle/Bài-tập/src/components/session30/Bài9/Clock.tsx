import React, { Component } from 'react'

interface Time {
    time: string
}

export default class Clock extends Component<any, Time> {
    timerID: number = 0;
    constructor(props: any) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString()
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({
            time: new Date().toLocaleTimeString()
          }),
          1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h2>Thời gian hiện tại: {this.state.time}</h2>
        </div>
      );
    }
}
