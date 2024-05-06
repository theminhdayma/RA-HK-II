import React, { Component } from 'react'

interface User {
    id: number,
    name: string,
    address: string
}

const users: User[] = [
    {
        id: 1,
        name: "Thế Minh",
        address: "Hát Môn",
    },
    {
        id: 2,
        name: "Minh Sâm",
        address: "Phụng Thượng",
    },
]

export default class Exercise03 extends Component<any, User> {
    constructor(props: User[]) {
        super(props)
    }
  render() {
    return (
      <div>
        {users.map((item, index)=>{
            return <div key={index}>
                <p>ID: {item.id}</p>
                <p>Họ tên: {item.name}</p>
                <p>Địa Chỉ: {item.address}</p>
            </div>
        })}
      </div>
    )
  }
}
