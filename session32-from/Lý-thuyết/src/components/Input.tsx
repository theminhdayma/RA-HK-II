import React, { useState } from 'react'

interface User {
    id: number
    name: string
    email: string
}

export default function Input() {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "",
        email: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({...user, [name]:value})

    }
    
  return (
    <div>Input
        <br />
        <label htmlFor="">userName</label>
        <input 
            value={user.name}
            onChange={handleChange}
            type="text" 
        />
        <br />
        <label htmlFor="">Email</label>
        <input
            value={user.email}
            onChange={handleChange}
            type="text"
        />
    </div>
  )
}
