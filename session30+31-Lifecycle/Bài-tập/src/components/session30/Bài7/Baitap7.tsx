import React, { Component } from 'react'

export default class Baitap7 extends Component {
    componentDidMount() {
        document.title = "Minh đẹp trai !!!";
    }
    /*
        Vì khi sửu dụng componentDidMount thì thành phần của component 
        đã được mount với DOM
    */
    
    render() {
        return (
          <div>
            <h3>Chú ý: Hãy nhìn lên tiêu đề tab</h3>
          </div>
        );
    }
}
