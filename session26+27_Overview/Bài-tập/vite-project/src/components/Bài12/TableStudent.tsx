import React from 'react'
import Navbar from './Navbar'
import ListStudent from './ListStudent'

export default function TableStudent() {
  return (
    <div className='formLeft'>
        <Navbar></Navbar>
        <div className='tableList'>
            <h3>Danh sách sinh viên</h3>
            <ListStudent></ListStudent>
        </div>
    </div>
  )
}