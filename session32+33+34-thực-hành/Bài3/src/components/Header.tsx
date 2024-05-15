import React, { useState } from 'react'
import Form from './Form';

interface Student {
    name: string,
    id: string,
    email: string,
    birth: string,
  }

interface HeaderProps {
  addStudent: (student: Student) => void;
}

export default function Header({ addStudent }: HeaderProps) {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const closeForm = () => {
    setIsFormOpen(false);
  }

  return (
    <>
      {isFormOpen && <Form addStudent={addStudent} closeForm={closeForm} />}
      <div className='first-header'>
        <h2>Quản lý sinh viên</h2>
        <button onClick={() => setIsFormOpen(true)}>Thêm mới sinh viên</button>
      </div>
      <div className='second-header'>
        <select name="" id="">
          <option selected value="">Không sắp xếp</option>
          <option value="">Sắp xếp theo tuổi</option>
        </select>
        <input type="text" placeholder='Tìm kiếm từ khóa theo tên hoặc email?' />
      </div>
    </>
  )
}
