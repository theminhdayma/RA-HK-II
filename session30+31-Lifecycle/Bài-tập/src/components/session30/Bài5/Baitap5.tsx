import React, { Component } from 'react'
import Baitap5Child from './Baitap5Child';

interface Status {
    status: string,
}

export default class Baitap5 extends Component<any, Status>{
    constructor(props: any) {
        super(props);
        this.state = {
          status: 'Open the form'
        };
      }
    
      updateData = () => {
        this.setState({
          status: 'Close the form'
        });
      }
    
      render() {
        return (
          <div>
            <Baitap5Child status = {this.state.status}></Baitap5Child>
            <button onClick={this.updateData}>Change State</button>
          </div>
        );
      }
}
