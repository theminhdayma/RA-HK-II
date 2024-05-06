import React from 'react'

interface Props {
    name: string
    students: string[]
}

export default function Functional(props: Props) {
    console.log(props);
    const {name} = props
    const {students} = props
  return (
    <div>
        <p>Xin chào {name}</p>
        <p>Danh sách tên</p>
        <ul>
            {students.map((item, index)=> {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

