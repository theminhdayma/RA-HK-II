import React, { useState } from 'react'

interface User {
    userName: string,
    email: string,
}

export default function Functional() {
    const [userName, setUserName] = useState<string>(" ");
    const [emailUser, setEmailUser] = useState<string>("");
    const [user, setUser] = useState<User>({
        userName: "",
        email: "",
    })

    //Hàm xử lý khi click
    // const handleClick = () => {
    //     console.log("Hello");       
    // }

    // // Gọi hàm theo kiểu truyền tham số
    // const handleDelete = (idUser: number) => {
    //     console.log("ID: ", idUser);       
    // }

    const regiter = () => {
        // console.log("Đã ấn vào hàm đăng ký: ", userName);  
        console.log(user);                
    }

    //Khai báo hàm handleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user, [name]: value
        })
        // => Lấy ra value của input
    }
        //Khai báo hàm handleChange
    // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmailUser(e.target.value)
    // }
  return (
    <div>
        Functional
        {/* <p onClick={()=>handleDelete(5)}>Thế Minh</p>
        <button onClick={handleClick}>Click</button> */}
        <br /><br /><br /><br />
        <label htmlFor="">userName</label>
        <input name='userName' onChange={handleChange} type="text" />
        <br />
        <label htmlFor="">EmailUser</label>
        <input name='email' onChange={handleChange} type="email" />
        <br />
        <button onClick={regiter}>Đăng ký</button>
    </div>
  )
}
