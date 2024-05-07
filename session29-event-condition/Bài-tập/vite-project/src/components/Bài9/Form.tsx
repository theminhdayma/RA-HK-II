import React, { useState } from 'react'
import "./Form.css"

interface LogIn {
    email: string,
    password: string
}

export default function Form() {
    const [logIn, setLogIn] = useState<LogIn>({
        email: "",
        password: "",
    })

    const [check, setCheck] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setLogIn({
            ...logIn, [name]: value
        })
    }

    const handleClicked = () => {
        setCheck(true)
    }

  return (
    <div className='bai9'>
        <div className='form'>
            <input onChange={handleChange} name='email' placeholder='Nhập email' type="email" />
            <input onChange={handleChange} name='password' placeholder='Nhập mật khẩu' type="password" />
            <button onClick={handleClicked} className='submit'>Submit</button>
        </div>
        <div className='render'>
            <h3>Email: {check && logIn.email}</h3>
            <h3>Mật Khẩu: {check && logIn.password}</h3>
        </div>
    </div>
  )
}
