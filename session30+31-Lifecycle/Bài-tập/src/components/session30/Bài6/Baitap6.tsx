import React, { Component } from 'react';
import Baitap6Child from './Baitap6Child';

interface Massage {
    massage: string,
}

export default class Baitap6 extends Component<any, Massage> {
    constructor(props: any) {
        super(props);
        this.state = {
          massage: 'Interface Rendering'
        };
    }
    
    updateData = () => {
        this.setState({
          massage: 'No Interface Rendering'
        });
    }
    
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Massage>, nextContext: any): boolean {
        return false
    }
    
    render() {
        return (
          <div>
            <Baitap6Child massage={this.state.massage}></Baitap6Child>
            <button onClick={this.updateData}>Change props</button>
          </div>
        );
    }
}
