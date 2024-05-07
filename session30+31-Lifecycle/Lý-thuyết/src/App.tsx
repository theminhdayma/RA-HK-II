import React, { Component } from 'react'
import Child from './components/Child'

interface Props {

}

interface State {
  name: string,
  age: number,
  count: number
  isActive: boolean
}

export default class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      // Chứa những dữ liệu
      name: "Thế Minh",
      age: 18,
      count: 0,
      isActive: true
    }
  }

  // Phương thức thay đổi state
  // Khi muốn thay dổi state đối với class thì phải dùng setState
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleRemove = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log("Nếu là false thì không chạy wilUpdate và DidUpdate");   
    return true
  }

  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    console.log("Phương thức componentWillUpdate được gọi");
    /*
      Chạy trước re-render nên thường cũng có thể tính toán lại 
      state hoặc props
    */
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("Phương thức componentDidUpdate được gọi");
    /*
      Chạy sau khi component re-render
      các phần tử của component được gắn kết vào DOM 
      nên có thể tương tác với DOM
    */
  }

  componentWillMount(): void {
    console.log(1,"componentWillUnmount được gọi !!!");
    // Thường làm gi ?
    /* 
      Chạy trước khi render cho nên ở component có thể tính toán lại
      state hoặc props 
      ==> Lưu ý: thời gian mà chuyển sang render nhanh
    */
  }

  componentDidMount(): void {
    console.log(3,"componentDidMount được gọi !!!");  
    // Thường làm gi ?
    /* 
      Cchạy sau khi component render lần đầu tiên
      Các thành phần của component được gắn vào DOM
      Có thể thực hiện các tương tác với DOM
      nơi lý tưởng để callKPI lấy data render ra component
    */
  }
  render() {
    console.log(2,"Component bắt đầu re-render !!!"); 
    // Không được dùng setState ở đây thì sẽ re-render liên tục
    return (
      <div>
        {this.state.name}
        {/* 
          Tạo class component
          life cycle (vòng đời của 1 component ==> chỉ áp dụng với class )
           * Trải qua 4 giai đoạn 
             1. Giai đoạn khởi tạo (initial)
               - khởi tạo state, props
             2. giai đoạn mounting (gắn vào, thêm vào)
               - Cung cấp các phương thức mặc định: 
                  + componentWillUnmount
                  + componentDidMount
               - Sau khi giai đoạn khởi tạo xong thì chạy vào phương thức (mặc định có sẵn)
               componentƯillMount() ==> componentRender () ==> componentDidMount()
             3. giai đoạn update (thay đổi)
               - Sảy ra khi state hoặc props thay đổi thì chạy vào giai đoạn updtate
               - Cung cấp các phương thức có sẵn: 
                 1. shouldComponentUpdate
                   ==> bắt buộc return true, false
                   ==> Nếu không khai báo thì mặc định là true
                 2. componentWillUpdate
                 3. componentDidUpdate
                 Note: Nếu shouldComponentUpdate(): 
                   ==> return true ==> componentWillUpdate() ==> render () ==> componentDidUpdate ()
                   ==> return false ==> Không chạy componentWillUpdate() và componentDidUpdate ()
             4. Giai đoạn unmouting (gỡ bỏ, xóa bỏ)
             
        */}
        {this.state.isActive && <Child></Child>}
        <button onClick={this.handleRemove}>remove Click</button>
        <button onClick={this.handleClick}>count</button>
        <p>Gía trị của count: {this.state.count}</p>
        <Child></Child>
      </div>
    )
  }
}
