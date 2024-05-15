import React from 'react'

interface Student {
  name: string,
  id: string,
  email: string,
  birth: string,
}

interface StudentItemProps {
  student: Student;
  index: number;
}

export default function StudentItem({ student, index }: StudentItemProps) {
  return (
    <tr className='student-tr'>
      <td>{index}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.birth}</td>
      <td>{student.email}</td>
      <td><div className='active-status'>Đang hoạt động</div></td>
      <td>
        <button>Chặn</button>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  )
}
