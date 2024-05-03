import React from 'react'
import "./TableInfo.css"
import "./Button"
import Button from './Button'

type Info = {
    stt: number,
    name: string,
    date: string,
    sex: string,
    address: string,
}

let infoList: Info[] = [
    {
        stt: 1,
        name: "Thế Minh",
        date: "23/12/2005",
        sex: "Nam",
        address: "Hà Nội"
    },
    {
        stt: 2,
        name: "Minh Sâm",
        date: "28/07/2006",
        sex: "Nữ",
        address: "Hà Nội"
    }
]

export default function TableInfo() {
  return (
    <>
        <table className='table'>
            <tr className='thead'>
                <td>STT</td>
                <td>Họ và tên</td>
                <td>Ngày sinh</td>
                <td>Giới tính</td>
                <td>Địa chỉ</td>
                <td>Hành động</td>
            </tr>
            {infoList.map((info, index) => (
                <tr key={index}>
                    <td>{info.stt}</td>
                    <td>{info.name}</td>
                    <td>{info.date}</td>
                    <td>{info.sex}</td>
                    <td>{info.address}</td>
                    <td><Button></Button></td>
                </tr>
            ))}
        </table>
    </>
  )
}