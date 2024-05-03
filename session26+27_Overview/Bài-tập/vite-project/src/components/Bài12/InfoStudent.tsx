import React from 'react'

export default function InfoStudent() {
  return (
    <div className='form'>
        <h3>Thông tin sinh viên</h3>
        <div className='infoStudent'>
            <div className='student'>
                <span>Mã sinh viên</span>
                <input type="text" />
            </div>
            <div className='student'>
                <span>Tên sinh viên</span>
                <input type="text" />
            </div>
            <div className='student'>
                <span>Tuổi</span>
                <input type="text" />
            </div>
            <div className='student'>
                <span>Giới tính</span>
                <input placeholder='Nam' type="text" />
            </div>
            <div className='student'>
                <span>Ngày sinh</span>
                <input type="date" />
            </div>
            <div className='student'>
                <span>Nơi sinh</span>
                <input placeholder='Hà Nội' type="text" />
            </div>
        </div>
        <button className='submit'>Submit</button>
    </div>
  )
}
