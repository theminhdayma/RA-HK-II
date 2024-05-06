import React, { useState } from 'react'

export default function StateFunctional() {
    const [number, setNumber] = useState<number>(1);
    // Khi dùng useState bắt buộc phải khai báo kiểu dữ liệu cho nó
    const [fullName, setFullName] = useState<string>("Thế Minh")
    // Hàm useState trả về 1 mảng bên trong mảng có 2 giá trị 
    // 1 là giá trị, 2 là hàm xử lý

    // Khai báo hàm
    const handleClick = () => {
        setNumber(number+1)
    }

    // Khi muốn cập nhật State thì dùng set...
  return (
    <div>
        {/* React ra đời năm 2013
        Trước đó trong function không quản lý state được mà chỉ 
        quản lý được ở bên trong class thôi

        tháng 10/2018: Hook ra đời bổ sung cho function có 
        thể quản lý state được useState */}
        <p>Gía trị number ban đầu: {number}</p>
        <p>Xin chào {fullName}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
