import React, { Component } from 'react'

interface Props {
    massage: string;
}

export default class Baitap6Child extends Component<Props>{
    render() {
        const { massage } = this.props;
    
        return (
          <div>
            <h2>Massage: {massage}</h2>
          </div>
        );
    }
}
