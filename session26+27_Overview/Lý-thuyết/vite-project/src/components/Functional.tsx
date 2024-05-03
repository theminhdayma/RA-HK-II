import React from 'react'

export default function Functional() {
    /* 
        Cách khai báo các kiểu dữ liệu và sử dụng chúng
    */

    let age: number = 18;
    let fullName:string = "Nguyễn Thế Minh"
    let address: string = "Hà Nội"
    type UserInfo = {
        name: string
        age: number
        address: string
    }    
    
    let user: UserInfo = {
        name: "Sâm",
        age: 17,
        address: "Hà Nội"
    }
  return (
    <div>
        <p>{JSON.stringify(user)}</p>
    </div>
  )
}
