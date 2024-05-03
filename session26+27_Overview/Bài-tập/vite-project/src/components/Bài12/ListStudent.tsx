import React from 'react'
import Action from './Action'

type Student = {
    stt: number,
    id: string,
    name: string,
    age: number,
    sex: string,
}

const students: Student[] = [
    {
        stt: 1,
        id: "SV001",
        name: "Nguyễn Văn A",
        age: 20,
        sex: "Nam",
    },
    {
        stt: 2,
        id: "SV002",
        name: "Nguyễn Thị B",
        age: 21,
        sex: "Nữ",
    },
    {
        stt: 3,
        id: "SV003",
        name: "Nguyễn Văn C",
        age: 19,
        sex: "Nam",
    },
]

export default function ListStudent() {
  return (
    <table className='tableStudent'>
        <tr>
            <td>#</td>
            <td>Mã sinh viên</td>
            <td>Tên sinh viên</td>
            <td>Tuổi</td>
            <td>Giới tính</td>
            <td>Hành động</td>
        </tr>
        {students.map((std, index)=>(
            <tr key={index}>
                <td>{std.stt}</td>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.age}</td>
                <td>{std.sex}</td>
                <td><Action></Action></td>
            </tr>
        ))}
    </table>
  )
}
