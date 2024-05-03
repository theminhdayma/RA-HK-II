import React from 'react'

export default function Navbar() {
  return (
    <div className='nav'>
        <button className='addStudent'>Thêm mới sinh viên</button>
        <input className='inputSearchStudent' type="text" />
        <button className='searchstd'>Tìm kiếm</button>
        <input className='softStudent' type="text" />
    </div>
  )
}
