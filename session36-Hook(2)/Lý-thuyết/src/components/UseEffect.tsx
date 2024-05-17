import React, {useEffect, useState} from 'react'

export default function UseEffect() {
    const [count, setCount] = useState<number>(0)
    const [numbers, setNumbers] = useState<number[]>([])
    const [active, setActive] = useState<boolean>(true)

    useEffect(() => {
        console.log("Đang gọi useEffect");
        
    },[active])

    const handleClick = () => {
        setCount(count+1)
        // Nếu giá trị của trong set... thay đổi thì mới re-render

        /*
            Khi click thì sẽ thêm 1 số ngẫu nhiên vào mảng numbers
        */
       let number = Math.floor(Math.random() * 1000);
       numbers.push(number)
       console.log(numbers);   
       
       // State phải được thay đổi mới được re-render
       setNumbers([...numbers])
    }
    console.log("Component được re-render");
    
    
  return (
    
    <div>
        <h1>UseState</h1>
        {/*
            Tất cả các hook bản chất là những function
            khi dùng phải imporrt
            - useEffect nhận vào 2 đối số
            1. Là 1 calkback (arrow function)
            2. [] || [deps]
             ==> useEffect có 3 cách dùng
              + C1: Chỉ chứa calkback là 1 arrow function
                => Khi component được mount vào DOM thì useEffect được gọi
                => mỗi lần coponent được re-render thì useEffect cũng được gọi
              + C2: Chứa calkback và []
                => Cũng được gọi sau khi component được mount vào DOM
                => Khi mỗi lần component re-render thì useEffect không bị gọi lại
              + C3: Chứa calkback, và [dependency(sựu phụ thuộc)]
                => Cũng được gọi sau khi component được mount vào DOM
                => Sau khi dependency thay đổi thì useEffect được gọi

                ==> Chú ý: useEffect là phương thức thường dùng để xử lý các tác vụ như 
                callAPI để lấy dữ liệu
                  - Thường dùng để xử lý các side(cạnh) Effect (bên cạnh ảnh hưởng phụ thuộc)

              - componentDidMount
              được gọi khi nào? sau khi component được render lần đầu
        */}
        <p>Số là click là: {count}</p>
        <button onClick={handleClick}>Click me !!!</button>
    </div>
  )
}
